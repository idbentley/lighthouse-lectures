# Lecture W1D2 - The Dev Workflow

## Content

- Intro
- Curriculum Overview
- Approach to lectures
- Incremental development
- Git

## You're Making a Life Changing Move

I've taught hundreds of students, many of whom come from non-technical backgrounds. Becoming a software developer is a _life changing_ move, and it's 100% acheivable.  With that being said, it's an incredible amount of work, and it will challenge you in ways that you don't expect.

Both a career and Sofware Development and this bootcamp program will make you uncomfortable, it's hard sometimes.  It can feel isolating, overwhelming, it can make you feel like you are not good enough, and all of these feelings are normal - what is important is your persistence.

## Curriculum Overview

[slides](https://docs.google.com/presentation/d/1_NWYcPhS6Q3hQKXnh09Eufl7hs45yBLbUBZhWyvqeSc)

## Remote Lecture

- It's recorded with Zoom
  - Please, turn on your cameras
  - Raise hands for questions
  - Use the shortcuts (ALT-Y to raise your hand, Spacebar to unmute yourself)

> Zoom and Live Share Links

  We'll post the Zoom and VS Code LiveShare links each morning in the slack channel.

> IceBreaker Discussion at 12:45 pm EST just to chat a bit

> Lecture is from 1pm - 3pm EST

> 10 min. break at around 2 pm EST

- Lecture notes and video recording 

## Approach to lectures

- Participate and be engaged 

  - It's a good time to ask questions.
  - I might ask you questions directly.
  - Cameras on, please!

- We will do live coding

- We will talk theory

- Focused on the approach
  - Problem Solving
  - Step by step incremental development
  - Error driven development

- Mix a theory and practice, more practice

- Breakouts

  - In some lectures, we might do an exercise where you will be split in breakout rooms of groups of 2 or 3. 

- What Lectures Are Not For
  - Coding along session - don't try to type with me - I'll give you all my code!

- You are welcomed to take notes

* Lecture notes and recording will be sent via Compass

#### What are you here to learn

- Coding skills, technologies such as JavaScript NodeJS/Express, Ruby on Rails, but it's more than that

- Do coding skills alone ensure that you are a good developer?

* Motivation (passion)
* Resilience, perseverance
* Problem solving
* Curiosity
* Communication
* Teamwork
* Adaptability (Learning new skills, adapting to changes)
* Positive attitude
* Willingness to grow and learn, having a growth mindset, learning from others

> You're more than coders. You're actually a communicator. You communicate your vision through code.

#### General Advices/Tips

- Don't compare yourself to others
- Keep going and never give up
- Be proactive!  Don't leave it for later
- Practice, practice, practice
- Have reasonable expectations
- Provide feedback, talk to staff, mentors

- Help one another

* Critical factor for success: ask questions!

  - Mentors are bored. Do reach out to them!

    - Code review
    - More advanced tips
    - Ask them to explain why

* disclaimer: the first few weeks are going to feel very intense!

## Tools

### Code Editor (VS Code)

- Shortcuts

**Learn to use shortcuts**

- [VS Code Cheat Sheet](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

- Useful Add-Ons:
  - Linter
  - Coloring for file types

### Google

- Find answers to your question
  - Stack Overflow
  - forums
  - mailing lists

### Markdown

-[Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

- Take notes using markdown

### Version Control

- What, Why git?

  - Repositories (one repo per projects)
  - Save milestones
  - Keeps an history of your code (commits)
  - Backup copy on github, gitlab, etc
  - Work better as teams, branches

- Do use git

- You will _have_ to use git in team projects

- The more practice you can get with git, the better!

#### Git Commands

- git workflow

  - add files to staging area
  - commit changes
  - update github

- git status
- git add .
- git commit -m "message"
- git remote -v (or add origin, rm origin)
- git push
- git pull
- git log

## How to approach problem solving

### Incremental development

- List the steps in order to solve a problem. Not thinking about the syntax.

- Step-by-step process

  Rinse and repeat:

  1. State the hypothesis
  2. Verify the hypothesis
  3. changes

- Writing pseudo-code

  - Write the steps in english to get to the solution

- Decomposition

  - Breaking down a complex problem into smaller more manageable problems
  - Each smaller problem is much simpler to solve

- Error-Driven Developement

  - Getting errors is part of the process -> Debugging
  - Incremental development is triggered by raising errors that will guide us in order to do the next steps


## Creating the app

- Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

### Debug Strategies

1- use console.log to understand what's going on

- use labels, separate multiple values with commas

2- Use the Node Inspector to Debug in Chrome > node --inspect-brk sum.js and go to chrome://inspect

- Play in Node REPL
- Play in another REPL such as Repl/it

3- Text Editor Integration

- You can debug in VS Code...

### Improve the Solution

- Refactor the code

  - Readability
  - Modularity
  - Catch errors
