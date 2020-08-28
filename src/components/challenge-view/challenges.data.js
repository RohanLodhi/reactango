const CHALLENGES_DATA = [
    {
        id: 5, 
        number: 5,
        author: 'litomayez',
        title: 'Coding Challenge #5',
        difficulty: 'Medium',
        questions: ['The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: 6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2.', 'There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums, and the sum of these palindromes is 4164. Note that 1 = 0^2 + 1^2 has not been included as this problem is concerned with the squares of positive integers.', 'Find the sum of all the numbers less than 10^8 that are both palindromic and can be written as the sum of consecutive squares.'],
        answer: "2906969179",
        solution: 'yashaslokesh/be8bd509220b9b7fbe7d66dc5fa47a6d',
        submissions: [
            {
                name: 'critter#9347',
                link: 'https://pastebin.com/raw/UU73B2Rw',
                best: true
            },
            {
                name: 'mike#2250',
                link: 'https://github.com/mikeyj777/Discord_Programmers_Unite_Weekly_Challenge/blob/master/Weekly_Challenge_5.py',
                best: false
            }
        ]
    },
    {
        id: 4, 
        number: 4,
        author: 'litomayez',
        title: 'Coding Challenge #4',
        difficulty: 'Medium',
        questions: ['For this week’s coding challenge, you have to build a job listing scraper that emails the user the potential listings.', 'The script should take the following user inputs: Type of job, Work experience required and Other optional fields that would filter the listings.', 'Email the user five potential job listings sorted by highest paying jobs. You can scrape from multiple sources.'],
        answer: "Scrape listings. Easy.",
        solution: '',
        submissions: [
        ]
    },
    {
        id: 3, 
        number: 3,
        author: 'litomayez',
        title: 'Coding Challenge #3',
        difficulty: 'Medium',
        questions: ['Rick and Morty are fed up with the Trump administration and their continuous exploitation of privacy rights. They have decided to encrypt their messages with their own rules so that nobody else can understand them.', 'Firstly, they remove all of the spaces from the message. Then, they write the letters into a matrix which has rows = Floor(len_of_message^0.5) and columns = Ceil(len_of_message^0.5). Now the message is obtained by combining all of the characters in a column and then adding a space and then combining all characters of the second column and so on.', 'For example: “welcome to just program” becomes “wmuo eesg lttr copa ojrm”', 'Write a function that encrypts the messages and another function for Rick that decrypts the messages.'],
        answer: "Create matrix and use for loops. Refer to Mike's solution below. ",
        solution: '',
        submissions: [
            {
                name: 'mike#2250',
                link: 'https://github.com/mikeyj777/Discord_Programmers_Unite_Weekly_Challenge/blob/master/Weekly_Challenge_3.ipynb',
                best: true
            }
        ]
    },
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
                link: 'https://github.com/RJFryman/weekly-challenge/blob/master/coding_challenge_2.rb',
                best: true
            },
            {
                name: 'Slippe#2743',
                link: 'https://ideone.com/WpWEaC',
                best: false
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
                link: 'https://github.com/RJFryman/weekly-challenge/blob/master/coding_challenge_1.rb',
                best: true
            }
        ]
    }
]

export default CHALLENGES_DATA;