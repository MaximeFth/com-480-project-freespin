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

We found two datasets on kaggle :

https://www.kaggle.com/justinas/nba-players-data

https://www.kaggle.com/drgilermo/nba-players-stats

They have a lot in common, the first one contains all the informations and stats about the players who played between 1996 and 2019
The second one is a bit different, firstly because it goes from 1950 to 2017, but also because it has some more "personnal" informations about the players.

It is also separated in 3 files, which is a great preprocessing.

For this particular task of a project like this, thoses datasets are great since they don't require much work to be usable. The main task here is to find a way to make the datasets usable together, thus maybe renaming the columns or some entries

### Problematic ###

Frame the general topic of your visualization and the main axis that you want to develop.

- What am I trying to show with my visualization?
- Think of an overview for the project, your motivation, and the target audience.

The first idea that came onto our mind was to find a way to show the "dominance" of a player, depending on his "body" (height and weight) and show correlations/deductions that could happen, even if some are pretty obvious (like really tall players tend to get more rebounds). We thought about a vizualisation where we could have an image of a human body and a way to "play" with it, to make it taller/smaller/... and it would sort out the player around the same "shape". 

We'd also like to find a way to sort out a kind of ranking between the players, based on their performances but also titles (and maybe by where they come from, their salaries, age,...).
We keep in mind that this is not an easy task. Not technically but finding a way to rank the players has to relate on a basis, and obviously we may not be completely unbiased since we have our preferences.

Another point for our overview of this project was to make an interactive map of the United States, where it could be possible to see, overall and season by season (even some smaller period ?), the performances of teams (and players ?) with a color code and by clicking on a state we could see which opponents were the easiest or toughest (with another color code) for example.

Why basketball and more precisely NBA ? Well, as 2 of us are basketball players and quite obviously huge fans of the NBA, we know this is a sport with a lot (really, a lot) of stats. You can't watch a single NBA game without seeing a statisitic about a player, a record being approached, broken or set, so we know that there is something to work with.

This is a group of 3, and our last (but not least !) member, despite not having a huge background in basketball, actually found a great interest in the project ! And having another point of view, more outside of the basketball world, with new ideas and analysis, is definitely a plus to make a more accessible work to everyone and not only basketball fans.

That's a great point to talk about our audience, who may seem to be only the ones that have a huge interest in this sport and the NBA. We hope to make this project in a way that could allow almost anyone to play with the data and understand it. Who knows, maybe that because of us, some of the users will try to watch basketball games and become fans !

### Exploratory Data Analysis ###

Pre-processing of the data set you chose:

- Show some basic statistics and get insights about the data :

Here is the firsts rows of our player Dataset that contains a bit less than 4000 different players whose careers covers the years 1950 to 2017. We have in addition 3 others Dataset containing more informations such as all in-game statistics (3pts rate, 2pts rate, rebounds, etc.. ) and also datasets containing more physical informations about them such as their weight, height, birth state, college etc...

Here is the Player Dataset:

**![ScreenShot](images/dataset.png?raw=true "Player's Dataset")**

Here are some example of statistics we extracted of the datasets:

Drafted Players height mean / year:

**![ScreenShot](images/meanHeight.png?raw=true)**


Dwyane Wade / Kobe Bryant  2pts over the years:

**![ScreenShot](images/BryantVsWade.png?raw=true)**


3Pts shot succeeded / year:

**![ScreenShot](images/threePoints.png?raw=true)**

### Related work ###

As the dataset is driven from Kaggle, in addition to the dataset, some related works are also provided. For each dataset, we’d like to describe which analysis are already done with the dataset.

#### nba-players-data/
- NBA Height and Weight Analysis (https://www.kaggle.com/justinas/nba-height-and-weight-analysis) : 
**![ScreenShot](images/NBA_Height_and_Weight_Analysis.png?raw=true)**
It's a work done by the author of the dataset. The analysis he proposed with his dataset is indeed “how age/height/weight tendencies have changed over time”. First, he showed the distribution of height and weight pointing out also the NBA mean and the average US Male Adult for each attribute. He showed how the average height and weight is changed over season and over country. Finally he showed the impact of height and weight on performance using average number of points, rebounds grabbed, assists distributed. In terms of interactive visualization, there is a scatter plot with height and weight as axes. On each point, we can see the name of the player and which height and weight he has. Another visualization is the average of NBA player height/weight by Country. On the map, each country is colored with different saturation based on the players' average height/weight : higher the average, more intense the color.

#### nba-players-stats/
- Height and Weight Animation (https://www.kaggle.com/drgilermo/height-and-weight-animation) : 
**![ScreenShot](images/Height_and_Weight_Animation.png?raw=true)**
It’s an animated work which plots a scatter plot Height against Weight for 5 different positions (PG: Point Guard, SG: Shooting Guard, SF: Small Forward, PF: Power Forward, C: Center) for each year (from 1950 to 2017). And between each graph, we see how the height-weight points of each position differs.
- The greatest players of all time (https://www.kaggle.com/drgilermo/goats-the-greatest-players-of-all-time) : 
It plots Top 10 players for Points per Game, Assists per Game, Rebounds per Game : in this way we can compare different players taking in account intangibles aspects affecting the flow of a game.
- Salary Cluster Analysis of NBA Players (https://www.kaggle.com/annettecatherinepaul/salary-cluster-analysis-of-nba-players) : 
First the clustering of the players have been done to 4 categories of performance (Excellent, Good, Average, Below Average) using different model (Hierarchical Clustering to choose the value of K, then K-Means Clustering). Then it plots the scatterplot of performance-salary.
- Salary Prediction using Multiple Regression (https://www.kaggle.com/koki25ando/nba-salary-prediction-using-multiple-regression) : 
First, using correlation plot, it checks which attribute is the most correlated with the salary : PPG (Points Per Game : PTS/G), MPG (Minutes Played Per Game : MP/G), TOPG(TurnOvers Per Game : TOV/G), RPG (Total Rebounds Per Game : TRB/G), PER (Player Efficiency Rating), SPG (Steals Per Game : STL/G), APG(Assist Percentage per Game : AST/G). Then it uses a linear regression model to predict the salary.

#### Generally NBA related works
- Visualization of NBA 2014 (http://lemonchiu.github.io/NBA-Visualization/) : 
**![ScreenShot](images/Visualization_of_NBA_2014.png?raw=true)**
It contains the visualization of US Map where each team is represented as points : it uses position to show where the home court is and it also uses the size of the points to highlight the different winning rate. Bigger points are the teams with higher winning rate. The name of the states are not shown initially but can be seen when we click the area of each state. With the mouse on each point, the logo of each team and the winning rate appear. If we click on the point of a team, the point color becomes yellow and it generates 6 pie charts (Points, Assists, Rebounds, Blocks, Steals, Turnovers) where each slice corresponds to each player's stats. If we click two or more teams, it generate a single radar chart taking the above 6 statistical values as axes and differents teams' statistics can be compared. If we click on the show button, a bar chart is generated with also the 6 statistical values for all the teams. There is two mode: Multiples and Stacked. In Multiples mode, each statistical values is plotted as a single bar. In Stacked mode, all 6 values are stacked and form one single bar. For both mode, the statistical values use different color saturation making them easily distinguishable. For each statistical value, we can give a weight to be applied when the bar plot is generated. For example, putting every where weight 0 except one value, we can get a bar plot of a single statistic for all teams. 
- Visualizing the NBA (https://wshuang6.github.io/d3-nba-visualization/) :
**![ScreenShot](images/Visualizing_the_NBA.png?raw=true)**
It contains the visualization of 3-points shooting for 2016-17 NBA Data : it plots the percentage of the 3-points on the number of 3-point-attempt. Here, the hue is used to describe different positions (Guard, Forward, Center, ...). It also contains the visualization of the percentage of the teammate assist (creators) and of the percentage of the usage of the ball. And the size of the point shows the percentage of the true shooting (finishers). And it shows how much Russell Westbrook's usage of the ball is high in both creating shots for teammates and  in finishing.

If these cited above related works have done some works showing interesting graphs about height-weight, top players, salary, etc., as we’ve described above in our problematic, we’d like to make these data more dynamic and interactive so that the users can tackle the data on their own and they could get more easily the results of what they are looking for.

It is the first time for us to explore these datasets, i.e. we didn’t use these datasets for any other context. And we are all enthusiast to make these datasets more valuable with a great visualization.


## Milestone 2 (Friday 1st May, 5pm)

**10% of the final grade**

Two A4 pages describing the project goal.

- Include sketches of the vizualiation you want to make in your final product.
- List the tools that you will use for each visualization and which (past or future) lectures you will need.
- Break down your goal into independent pieces to implement. Try to design a core visualization (minimal viable product) that will be required at the end.
- Then list extra ideas (more creative or challenging) that will enhance the visualization but could be dropped without endangering the meaning of the project.

Functional project prototype review.

- You should have an initial website running with the basic skeleton of the visualization/widgets.

**Changes due to comments on the first milestone**

First of all, we decided to set the idea of the body visualization (with the height and weight of the players) as the more challenging extra idea. Thus we moved to a more "classic" visualization that allow us to show performance of players on the both sides of the court but also all categories separatly.
The way we plan to do it is using a Sankey Diagram, where on the left side we have one or more players, in the middle attack and defense and on the right all the categories (points, asssits, rebounds,...).
In the case of a single player, it allows to see where his impact on the game is, if he is a scorer, someone that makes his teammates shine or even a beast that will protect his rim at all cost.
When adding players to the visualization, we can then compare what role each of them has in the team, the contribution in the games.
As an exemple, taking a team formed of 5 players the diagram would look like something like this :
**![ScreenShot](images/SankeySketch1.png?raw=true)**
Or like this, allowing to have a better understanding of the performance directly looking at the stats
**![ScreenShot](images/SankeySketch2.png?raw=true)**
We think this is a great and intuitive way to play with the data and have a look at the performances of players

Aside of that, we want to keep our idea of the interactive map, but instead of showing another time something related with performance, we thought about showing links or bounds between states (thus franchises).
It may seems unclear but we could see where a players played during his career, choosing Lebron James for exemple, who played for the Cavaliers, the Heat and for the Lakers. It could be a way to visualize trades, but also decisions that had a huge impact in the history of the NBA (for fans it is a really important subject).
That map could then contains all the trades that happened between two season **[Still have to take a closer look at the data]**, see what franchises have had the most players playing for them, and even more.
Lebron James Franchises :
**![ScreenShot](images/LebronJamesTrades.png?raw=true)**

## ADD MORE ?

Now that our goals are set, obviously the tools that we're gonna use are the tow following visualization method :
(- Sankey Diagram) Done 
- Map (connection, bubble map and maybe choropleth )
### More details about the tools, developp this section

The extra idea will be the human body visualization as explained in the first milestone

### To do
- Breakdown of goals and design of core visualization
- Functionnal website
- More work with data
- Rewrite of the whole project in order to fulfill what is asked for the milestone 2

## Milestone 3 (Thursday 28th May, 5pm)

**80% of the final grade**

