# Git Workflow

![Git Workflow](./git-flow.jpg)

# Tips for Code Peer Reviews

Importantly, remember to give constructive feedback, eg: 

* "This could be improved by ..."
* "Another way to express this would be ..."
* "Please remove this commented code."
etc

Remember, most of your team will be in walking distance!  If an in-person conversation or query would be faster, then just go talk to your fellow developer :P

# Smelly Code to Look For

This is certainly not an exhaustive list, but here are some things to look out for when reviewing code.  Feel free to give your own suggestions too!

1. `// TODO / FIX / TEMP` - Either do the thing or remove the comment.
2. Commented out code - remove it.
3. Non-conventional naming and spelling mistakes - correct them.
4. Lengthy conditional logic, eg: `if / else if / else if / else`, etc.  Could this be made eaiser to read with a switch statement?  Could it be refactored into smaller functions?
5. Non-reachable logic, eg: `if(true) { // Do something } else { // Non-reachable code }`.
6. Not separating concerns, eg: a module called pokemonDataHelper that includes logic for dealing with pokemon data, but also functions for converting timestamps to human-readable dates.  In that case, it might make sense to move the date conversion code to another helper called timeDateHelper.
7. Variables that are not used.
8. Packages in package.json - are they correctly installed as produciton or dev dependencies?  Are any new packages actually used?
9. Consistent use of CSS throughout, eg: classes or tailwind.
10. Duplicated code, Don't Repeat Yourself (DRY).


