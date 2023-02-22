import pandas as pd

b = pd.read_csv("Batting.csv")
p = pd.read_csv("Pitching.csv")

data = pd.concat([b,p])

data = data[["playerID", "teamID"]]
data = data.drop_duplicates()
data = data.groupby('playerID')['teamID'].apply(list).reset_index(name='teams')
print(data.head(10))

data.to_json("player-teams.json")