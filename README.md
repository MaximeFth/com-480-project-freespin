# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Fellrath Maxime | 274858 |
| Jeanmonod Xavier | 260376 |
| Tak Yura | 247528 |

[Milestone 1](#milestone-1-friday-3rd-april-5pm) • [Milestone 2](#milestone-2-friday-1st-may-5pm) • [Milestone 3](#milestone-3-thursday-28th-may-5pm)

## Milestone 1 (Friday 3rd April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas. Please, fill the following sections about your project.

(max. 2000 characters per section)

### Dataset ###

Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.

Hint: some good pointers for finding quality publicly available datasets (Google dataset search, Kaggle, OpenSwissData, SNAP and FiveThirtyEight)

**We found two datasets on kaggle :**

https://www.kaggle.com/justinas/nba-players-data

https://www.kaggle.com/drgilermo/nba-players-stats

**They have a lot in common, the first one contains all the informations and stats about the players who played between 1996 and 2019
The second one is a bit different, firstly because it goes from 1950 to 2017, but also because it has some more "personnal" informations about the players.**

**It is also separated in 3 files, which is a great preprocessing.**

**For this particular task of a project like this, thoses datasets are great since they don't require much work to be usable. The main task here is to find a way to make the datasets usable together, thus maybe renaming the columns or some entries**

### Problematic ###

Frame the general topic of your visualization and the main axis that you want to develop.

- What am I trying to show with my visualization?
- Think of an overview for the project, your motivation, and the target audience.

**The first idea that came onto our mind was to find a way to show the "dominance" of a player, depending on his "body" (height and weight) and show correlations/deductions that could happen, even if some are pretty obvious (like really tall players tend to get more rebounds).**

**We'd also like to find a way to sort out a kind of ranking between the players, based on their performances but also titles (and maybe by where they come from, their salaries, age,...).
We keep in mind that this is not an easy task. Not technically but finding a way to rank the players has to relate on a basis, and obviously we may not be completely unbiased since we have our preferences.**

**Another point for our overview of this project was to make an interactive map of the United States, where it could be possible to see, overall and season by season (even some smaller period ?), the performances of teams (and players ?) with a color code and by clicking on a state we could see which opponents were the easiest or toughest (with another color code) for example**

**Why basketball and more precisely NBA ? Well, as 2 of us are basketball players and quite obviously huge fans of the NBA, we know this is a sport with a lot (really, a lot) of stats. You can't watch a single NBA game without seeing a statisitic about a player, a record being approached, broken or set, so we know that there is something to work with.**

**This is a group of 3, and our last (but not least !) member, despite not having a huge background in basketball, actually found a great interest in the project ! And having another point of view, more outside of the basketball world, with new ideas and analysis, is definitely a plus to make a more accessible work to everyone and not only basketball fans.**

**That's a great point to talk about our audience, who may seem to be only the ones that have a huge interest in this sport and the NBA. We hope to make this project in a way that could allow almost anyone to play with the data and understand it. Who knows, maybe that because of us, some of the users will try to watch basketball games and become fans !**

### Exploratory Data Analysis ###

Pre-processing of the data set you chose:

- Show some basic statistics and get insights about the data

**Here is the firsts rows of our player Dataset that contains a bit less than 4000 different players whose careers covers the years 1950 to 2017. We have in addition 3 others Dataset containing more informations such as all in-game statistics (3pts rate, 2pts rate, rebounds, etc.. ) and also datasets containing more physical informations about them such as their weight, height, birth state, college etc...**

**Here is the Player Dataset:**

**![ScreenShot](images/dataset.png?raw=true "Player's Dataset")**

**Here are some example of statistics we extracted of the datasets:**

**Drafted Players height mean / year:**

**![ScreenShot](images/meanHeight.png?raw=true)**


**Dwyane Wade / Kobe Bryant  2pts over the years**

**![ScreenShot](images/BryantVsWade.png?raw=true)**


**3Pts shot succeeded / year:**

**![ScreenShot](images/threePoints.png?raw=true)**

### Related work ###

As the dataset is driven from Kaggle, in addition to the dataset, some related works are also provided. For each dataset, we’d like to describe which analysis are already done with the dataset.

#### nba-players-data/
- There’s a work done by the author of the dataset : NBA Height and Weight Analysis. The analysis he proposed with his dataset is indeed “how age/height/weight tendencies have changed over time”. First, he showed the distribution of height and weight pointing out also the NBA mean and the average US Male Adult for each attribute and proved that they have a high correlation (0,839) between them. He showed how the average height and weight is changed over season and over country. Finally he showed the impact of height and weight on performance using average number of points, rebounds grabbed, assists distributed.

#### nba-players-stats/
- Height and Weight Animation : It’s an animated work which plots a scatter plot Height against Weight for 5 different positions (PG: Point Guard, SG: Shooting Guard, SF: Small Forward, PF: Power Forward, C: Center) for each year (from 1990 to 2017). And between each graph, we see how the height-weight points of each position differs.
- NBA Data Exploration & Visualization : It plots Top20 players with their total points marked during their entire career with Kareem Abdul-Jabbar at first place. It tries to discover the correlation between the points and stats value using correlation matrix. And it shows that there is indeed some positive correlation between height&weight with the points.
- The greatest players of all time : It plots Top 10 players for Points per Game, Assists per Game, Rebounds per Game : in this way we can compare different players taking in account intangibles aspects affecting the flow of a game.
- Salary Cluster Analysis of NBA Players : First the clustering of the players have been done to 4 categories of performance (Excellent, Good, Average, Below Average) using different model (Hierarchical Clustering to choose the value of K, then K-Means Clustering). Then it plots the scatterplot of performance-salary.
- Salary Prediction using Multiple Regression : First, using correlation plot, it checks which attribute is the most correlated with the salary : PPG (Points Per Game : PTS/G), MPG (Minutes Played Per Game : MP/G), TOPG(TurnOvers Per Game : TOV/G), RPG (Total Rebounds Per Game : TRB/G), PER (Player Efficiency Rating), SPG (Steals Per Game : STL/G), APG(Assist Percentage per Game : AST/G). Then it uses a linear regression model to predict the salary.

If these cited above related works have done some works showing interesting graphs about height-weight, top players, salary, etc., as we’ve described above in our problematic, we’d like to make these data more dynamic and interactive so that the users can tackle the data on their own and they could get more easily the results of what they are looking for.

It is the first time for us to explore these datasets, i.e. we didn’t use these datasets for any other context. And we are all enthusiast to make these datasets more valuable with a great visualization.


## Milestone 2 (Friday 1st May, 5pm)

**10% of the final grade**




## Milestone 3 (Thursday 28th May, 5pm)

**80% of the final grade**

