# Soccer Quiz

This is a simple online quiz to test your knowledge in soccer. Users can create a username, play the quiz, see their scores, and provide feedback.

## How to Play

1. Enter your desired username and click the "Start Quiz" button.
2. You will be presented with a series of soccer-related questions.
3. Choose the correct answer from the options provided.
4. Your score will be calculated based on the number of correct answers.
5. At the end of the quiz, you will see your final score.

## Screenshots

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)

## License

This project is licensed under the [MIT License](LICENSE).

## Customize Solutions

1. Clone the repository.
2. Open `index.html` in your web browser.

### Add/Modify questions

To add or modify questions, open the `script.js` file, and you will find an array named `questions`. Each question is represented as an object with properties `question`, `options`, `correctAnswer`, and `image`. You can add more questions to this array by following the same format.

## Testing
We have loaded the sites in different types of devices including Macbook, Windows laptop, IPhone, and Android phones. The text wraps nicely in the landing section seamlessly depending on the size of the screen and the images load appropriately. Also the links work perfectly and navigates to the appropriate section upon click. The forms element provides sufficient guide to provide correct input. Furthermore, we have tested with other users. The texts are readable and the users gave the feedback that the site is clutter free.

Validator Testing
HTML: No errors were returned when passing through the official W3C validator
CSS: No errors were found when passing through the official (Jigsaw) validator
Accessibility: Lighthouse inspection gave the score of 100 for accessiblity
Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:

In the GitHub repository, navigate to the Settings tab.
For source, select Deploy from a branch.
For branch, choose main.
The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - https://fokhrun.github.io/gamlastan_tours/
