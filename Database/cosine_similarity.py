from transformers import BertTokenizer, BertModel
import torch
import numpy as np

from populate import *


## Convert 'Natural Science Electives' to embeddings
keyword = 'Natural Science Electives'

# Create the model
model_name = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertModel.from_pretrained(model_name)

tokens = tokenizer(keyword, return_tensors='pt')
with torch.no_grad():
    outputs = model(**tokens)
    keyword_embeddings = outputs.last_hidden_state[0][0]
    keyword_embeddings = keyword_embeddings.reshape(768, 1)

# Cosine similarity method
def top_k_cosine_similarity(query_vector, tensor, k=1):
    similarities = np.dot(tensor, query_vector) / (np.linalg.norm(tensor, axis=1) * np.linalg.norm(query_vector))
    top_k_indices = np.argpartition(similarities, -k)[-k:]
    top_k_similarities = [(i, similarities[i]) for i in top_k_indices]
    top_k_similarities.sort(key=lambda x: x[1], reverse=True)

    return top_k_similarities


# # Query to get all the embeddings in the database
db = setup()
cursor = db.Courses.find()
all_entries = [entry for entry in cursor]
all_names = [entry['title'] for entry in all_entries]
all_embeddings = [entry['embedding'] for entry in all_entries]
all_embeddings_np = np.array(all_embeddings)


all_embeddings_tuples = [tuple(embedding) for embedding in all_embeddings]
embeddings_to_name = dict(zip(all_embeddings_tuples, all_names))



top_k_similar_embeddings = top_k_cosine_similarity(keyword_embeddings, all_embeddings_np)[0][1]

for a in top_k_similar_embeddings:
    print(tuple(a))
top_k_similar_embeddings_tuple = [tuple(embedding) for embedding in top_k_similar_embeddings]
print(top_k_similar_embeddings_tuple)

# for embedding_tuple in top_k_similar_embeddings_tuple:
#     print(embedding_tuple)

# # top_k_similar_classes = []
# # for simlar_tuple in top_k_similar_tuples:
# #     print(simlar_tuple)
# #     top_k_similar_classes.append(embeddings_to_name[simlar_tuple])

# top_k_similar_classes = [embeddings_to_name[embedding] for embedding in top_k_similar_embeddings_tuple]


# # Query to get all the embeddings in the database
# db = setup()
# cursor = db.Courses.find()
# all_entries = [entry for entry in cursor]
# all_names = [entry['title'] for entry in all_entries]
# all_embeddings = [entry['embedding'] for entry in all_entries]
# all_embeddings_np = np.array(all_embeddings)

# k = 5  # Adjust this value as needed
# top_k_embeddings = top_k_cosine_similarity(keyword_embeddings, all_embeddings_np, k)

# top_k_class_names = []
# for embedding_idx in top_k_embeddings:
#     print(embedding_idx)
#     # embedding_idx_int = int(embedding_idx)  # Convert to a regular integer
#     # major_name = db.Majors.find_one({"embedding": list(all_embeddings[embedding_idx_int])})["name"]
#     # top_k_class_names.append(major_name)