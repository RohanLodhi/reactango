const CHALLENGES_DATA = [
    {
        id: 2, 
        number: 2,
        author: 'exzia',
        title: 'Coding Challenge #2',
        difficulty: 'Easy',
        questions: ['Write a function that returns True if two lists, when combined, form a consecutive sequence.', 'Example (in Python): consecutive_combo([7, 4, 5, 1], [2, 3, 6]) ➞ True, consecutive_combo([1, 4, 6, 5], [2, 7, 8, 9]) ➞ False', 'Notes: The input lists will have unique values. The input lists can be in any order. A consecutive sequence is a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not. This can be written in any language.'],
        answer: 'Merge and sort',
        solution: '',
        submissions: [
            {
                name: 'rjfryman#8249',
                link: 'https://github.com/RJFryman/weekly-challenge/blob/master/coding_challenge_2.rb'
            },
            {
                name: 'Slippe#2743',
                link: 'https://ideone.com/WpWEaC'
            }
        ]
    },
    {
        id: 1,
        number: 1,
        author: 'litomayez',
        title: 'Coding Challenge #1',
        difficulty: 'Easy',
        questions: ['Jim has four seven-sided dice, each with faces numbered 1, 2, 3, 4, 5, 6, 7. Jill has seven four-sided dice, each with faces numbered 1, 2, 3, 4. Both of them roll all of their dice and calculate the sums of the numbers on their respective dice. The one with the higher sum wins. ', 'What is the probability that Jim wins? Give your answer rounded to seven decimal places.'],
        answer: '34.6411346%',
        solution: 'RohanLodhi/a68d87ab7105be91ad3d83a1268f7b90',
        submissions: [
            {
                name: 'rjfryman#8249',
                link: 'https://github.com/RJFryman/weekly-challenge/blob/master/coding_challenge_1.rb'
            }
        ]
    }
]

export default CHALLENGES_DATA;