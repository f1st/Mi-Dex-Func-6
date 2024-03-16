import pandas as pd
from sklearn.linear_model import LinearRegression

# Load historical price data
data = pd.read_csv('crypto_price_data.csv')

# Prepare features and target variables
X = data[['Volume', 'Market Cap']]
y = data['Price']

# Train the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predicted_price = model.predict([[500000, 1000000000]])
