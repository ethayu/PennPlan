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
from sklearn.metrics.pairwise import cosine_similarity

def find_most_similar_vectors(query_vector, vectors_collection, num_similar_vectors=3):
    similarities = cosine_similarity(query_vector.T, vectors_collection)
    most_similar_indices = np.argsort(similarities[0])[::-1] 
    top_similar_vectors = vectors_collection[most_similar_indices[:num_similar_vectors]]
    return top_similar_vectors




# # Query to get all the embeddings in the database
db = setup()
cursor = db.Courses.find()
all_entries = [entry for entry in cursor]
all_names = [entry['title'] for entry in all_entries]
all_embeddings = [entry['embedding'] for entry in all_entries]
all_embeddings_np = np.array(all_embeddings)


all_embeddings_tuples = [tuple(embedding) for embedding in all_embeddings]
embeddings_to_name = dict(zip(all_embeddings_tuples, all_names))

print(keyword_embeddings.shape)
print(all_embeddings_np.shape)

top_k_similar_embeddings = find_most_similar_vectors(keyword_embeddings, all_embeddings_np, num_similar_vectors=2)
print(top_k_similar_embeddings.shape)
top_k_similar_embeddings_tuple = [tuple(embedding) for embedding in top_k_similar_embeddings]

top_k_similar_classes = [embeddings_to_name[embedding] for embedding in top_k_similar_embeddings_tuple]
print(top_k_similar_classes)
