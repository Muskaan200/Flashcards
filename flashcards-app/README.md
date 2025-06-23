# Web Development Project 3 - *Flashcards! Language & Country Quiz*

Submitted by: **Muskaan**

This web app: **is an interactive flashcard game that helps users practice Spanish vocabulary and world geography by guessing translations and identifying countries by their flags. It supports smart answer checking, visual feedback, card shuffling, and progress tracking through streaks and mastered cards**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [ x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [ x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:


- [x ] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [ x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [ x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [ x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards


The following **additional** features are implemented:

* [x] Cards include images (flags or icons) and category-based color styles
* [x] Flashcards flip on click to show the answer
* [x] Visual styling matches a clean and educational theme
* [x] All features persist within the session for interactive use

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/iZahqGx' title='Video Walkthrough' width='' alt='Video Walkthrough' />


## Notes

Describe any challenges encountered while building the app.
Implementing fuzzy answer matching while still allowing meaningful learning
- Managing state when removing mastered cards from the live set
- Styling buttons and preventing wrap-around navigation in a user-friendly way
- Ensuring everything still works after shuffle and state resets
## License

    Copyright [2025] [Muskaan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the