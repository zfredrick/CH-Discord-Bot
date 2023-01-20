# CH-Discord-Bot

### **Summary** 

A discord timer bot that allows the managment of boss timers for the game Celtic Heroes. 

The bot resets specific timers for each boss based on the command sent to it and automatically edits embeds to allow users to see how much time is left on each timer. Based on customizable settings, the bot will send notifications when specific timers are about to hit 0 (these can be set to any times such as 3min before).


------------

### **Available Commands**

```/reset <bossname>``` - Resets the timer for a specified boss with its preset respawn time

```/creset <bossname> <minutes>``` - Resets the timer for a specified boss with a custome time in minutes

```/clear-timer <bossname>``` - Clears the timer of a specified boss

```/clear-all-timers``` - Clear of the timers for all bosses

```/create-embeds``` - Creates the initial discord embeds to store and dispay the timers

------------

### **Implementation of the bot**

Resetting Timers:

![Capture](https://user-images.githubusercontent.com/62224239/213630493-3e451ba5-97cf-4339-9343-27c5e78b2b36.PNG)

Receiving Alerts:

![Capture](https://user-images.githubusercontent.com/62224239/213630811-4425b611-be97-4926-a01b-87c6335202e5.PNG)

Viewing Timers:

![Capture](https://user-images.githubusercontent.com/62224239/213630926-8abcad03-92b7-4504-a365-8e9ceb4b3529.PNG)
