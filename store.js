const STORE = {
    questions: [//1
        {
            image: "images/image_question_one.jpg",
            question: "How many countries are in the world?",
            options: [
                "215",
                "150",
                "195",
                "185"
            ],
            answer: "195",
            info: 'The United Nations (UN) recognizes 195 sovereign countries.'
        },
        //2
        {
            image: "images/two.jpg",
            question: "What is the biggest country in the world?",
            options: [
                "Russia",
                "Africa",
                "United_States",
                "Canada"
            ],
            answer: "Russia",
            info: 'The largest country in the world is Russia with a total area of 17,098,242 Km² '
        },
        //3
        {
            image: 'images/q3.jpg',
            question: "What is the smallest caountry in the world?",
            options: [
                "Vatican_City",
                "Monaco",
                "Nauru",
                "San Marino"
            ],
            answer: "Vatican_City",
            info: 'Vatican City is the smallest country in the world, measuring just 0.2 square miles'
        },
        //4
        {
            image: 'images/q4.jpg',
            question: "what is the highest mountain in the world?",
            options: [
                "Mt._K2",
                "Mt._Makalu",
                "Aconcagua",
                "Mt._Everest",
            ],

            answer: "Mt._Everest",
            info: 'The highest mount is the Everest with a peak at 8,850 meters (29,035 feet) above sea level'
        },
        //5
        {
            image: 'images/q5.jpg',
            question: "What is the longest river in the world?",
            options: [
                "Amazon_River",
                "Nile_River",
                "Congo_River",
                "Yellow_River"
            ],
            answer: "Nile_River",
            info: 'The Nile is credited as the longest river in the world, it extends 6,695 km (4,160 miles) in length.'
        },
        //6
        {
            image: 'images/q6.jpg',
            question: "What is the Capital of Colombia?",
            options: [
                "Caracas",
                "Bogota",
                "Columbia",
                "Salvador"
            ],
            answer: "Bogota",
            info: 'After the Battle of Boyacá on 7 August 1819, Bogotá became the capital of the independent nation of Gran Colombia.'
        },
        //7
        {
            image: 'images/q7.jpg',
            question: 'What is the largest city in U.S. (by Area)?',
            options: [
                "Houston",
                "New_York",
                "Sitka",
                "Jacksonville"
            ],
            answer: "Sitka",
            info: 'Sitka, AK is the largest city in the U.S. with an area of 2,870.3 mi²'
        },
        //8
        {
            image: 'images/q8.jpg',
            question: "What is the most populated state in the US?",
            options: [
                "Texas",
                "California",
                "New_York",
                "Alaska"
            ],
            answer: "California",
            info: 'California has the largest population in the United States followed by Texas and Florida.'
        },
        //9
        {
            image: 'images/q9.png',
            question: "What is the biggest island in the world?",
            options: [
                "Greenland",
                "Madagascar",
                "Australia",
                "New_Zeland"
            ],
            answer: "Greenland",
            info: "Greenland is the world's largest island covering 2,175,597 square kilometers."
        },
        //10
        {
            image: 'images/q10.jpg',
            question: "What is the happiest Country in the world?",
            options: [
                "Netherlands",
                "Norway",
                "Findland",
                "Iceland"
            ],
            answer: "Findland",
            info: 'According to the 2019 Happiness Report, Finland is the happiest country in the world'
        },
    ],
    currentQuestion: 0,
    score: 0
};