# Problem Statement 
1. Clicking the Get Started Button should start fetching the Question via an fetch Call.
Meanwhile, hide the instructions and show the loader view.
2. The question data can be fetched by making an API call to api from question
where ID is fetched from the hidden Input embedded in the page
API response has the following format:
{
 "data": {
 "question": "Angular 2 components can be described using ________is a way to do some
meta-programming.",
 "options": [
 "a) controllers, controller",
 "b) Loaders, loader",
 "c) typescripts, typescript",
 "d) decorators, decorator"
 ],
 "answer": 3,
 "id": 1
 }}
3. Once the question data is fetched and is ready to be displayed, hide the loader and
show the quiz view.
4. Add a Quiz View which contains the question, the options of the question and a
submit button
5. The submit button should be disabled until an option is selected by the user
6. Allow the users to select an option they think is correct
7. When the user selects an answer, add the class user-answer to the option which
the user has selected
8. There can only be one active user-answer for any given question
9. Allow the users to click on the submit button once they have selected their option,
perform validation of the answer and then display whether their answer is correct
or not.
10. In case their answer is correct, show a green box using the HTML class correctanswer in the answer selected. In case, it’s incorrect, show a red box using the
HTML class wrong-answer in the selected answer and a green box using class
correct-answer corresponding to the correct answer.
