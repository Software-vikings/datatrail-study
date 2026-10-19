window.DataTrailPythonAnalyticsLessons = [
  {
    "id": "p1-c00",
    "curriculumId": "P1-C00",
    "prerequisites": [],
    "title": "Getting started with Python",
    "level": "Beginner",
    "mins": 15,
    "plain": "Python is a way to give a computer clear instructions. You write a small program, run it, and inspect what happened. The text or result you see is called output. When Python cannot follow an instruction, it shows an error instead of silently guessing.",
    "definition": "Python is a general-purpose programming language. A Python runtime executes the instructions in your program. A script is a file that stores Python instructions so you can run them again. Output is information your program produces; an error describes a problem that stopped or interrupted execution.",
    "analogy": "Think of a recipe. The written steps are your code. The person following the recipe is like the Python runtime. The finished dish is the result. When a recipe step is unclear or impossible, you need to fix the instruction rather than expect the cook to guess what you meant.",
    "setupGuide": "You can start inside this lesson: the editor runs Python in your browser, so you do not need to install anything. The first run downloads the browser runtime and needs an internet connection. For local practice later, install a current Python 3 release, save instructions in a file ending in .py, then run `python3 first_program.py` in the macOS or Linux terminal (`py first_program.py` is commonly used on Windows).",
    "example": "print(\"Hello, DataTrail!\")",
    "expectedOutput": "Hello, DataTrail!",
    "prediction": "Before pressing Run, what do you expect the program to display?",
    "predictionAnswer": "It displays one line: Hello, DataTrail! The quotation marks tell Python where the text begins and ends; print() sends that text to the output area.",
    "question": "In a Python lesson, what does the word output mean?",
    "options": [
      "The instructions you type before running the program",
      "The result or information produced when the program runs",
      "The name of the Python file"
    ],
    "answer": 1,
    "why": "Output is what the program produces when it runs. The code is the instruction; output is the result you observe.",
    "task": "Write and run a program that displays exactly this one line: My first Python program is running. Keep the full stop at the end.",
    "hint": "Use print() with the message inside matching quotation marks. The text inside the quotation marks must match the task exactly.",
    "solution": "print(\"My first Python program is running.\")",
    "exercise": {
      "title": "Your first visible result",
      "prompt": "Use print() to display exactly one line: My first Python program is running.",
      "setup": "",
      "starter": "print(\"Replace this message with the required sentence\")",
      "hint": "print() displays the value inside its parentheses. Keep the spelling, spaces and full stop exactly as requested.",
      "solution": "print(\"My first Python program is running.\")",
      "tests": [
        {
          "name": "Displays the requested message",
          "code": "assert __output__.strip() == 'My first Python program is running.'",
          "expected": "My first Python program is running.",
          "actual": "__output__.strip()",
          "failureMessage": "The printed text must match the requested sentence exactly, including its full stop."
        },
        {
          "name": "Keeps the message on one line",
          "code": "assert len(__output__.strip().splitlines()) == 1",
          "expected": 1,
          "actual": "len(__output__.strip().splitlines())",
          "failureMessage": "The exercise asks for one line of output. Check that you have not printed an extra line."
        },
        {
          "name": "Uses a print instruction",
          "code": "assert any(line.lstrip().startswith('print(') for line in __source__.splitlines())",
          "failureMessage": "Use print() to display the message; a comment alone does not run."
        }
      ]
    }
  },
  {
    "id": "p1-c01",
    "curriculumId": "P1-C01",
    "prerequisites": [
      "p1-c00"
    ],
    "title": "First instructions and calculations",
    "level": "Beginner",
    "mins": 20,
    "plain": "Python can do the same arithmetic you would do on paper, but it can repeat the work accurately. You can also give a value a name, then use that name later. This is how we turn a business question into a small, repeatable calculation.",
    "definition": "An expression is a combination of values and operators that Python evaluates to produce a value. Assignment uses = to store the result on the right in a variable named on the left. A variable is a name that refers to a value. print() displays values in the output area.",
    "analogy": "Imagine a shopkeeper writing a small calculation on a bill. The number of items and the price are written once. The shopkeeper multiplies them to get revenue, subtracts the cost to get profit, and writes both answers on the bill. Variables are the labelled spaces that keep those numbers easy to reuse.",
    "example": "units_sold = 12\\nprice_per_unit = 250\\ncost = 1800\\n\\nrevenue = units_sold * price_per_unit\\nprofit = revenue - cost\\n\\nprint(\"Revenue:\", revenue)\\nprint(\"Profit:\", profit)",
    "expectedOutput": "Revenue: 3000\nProfit: 1200",
    "prediction": "Without running the code, what will revenue and profit be?",
    "predictionAnswer": "Revenue is 12 × 250 = 3,000. Profit is 3,000 − 1,800 = 1,200. The variable names let us read the calculation like a small business formula.",
    "question": "What does this instruction do: units_sold = 12?",
    "options": [
      "It checks whether units_sold is equal to 12",
      "It stores the value 12 in a variable named units_sold",
      "It prints the number 12 automatically"
    ],
    "answer": 1,
    "why": "A single = assigns a value to a variable. It does not print the value, and it is not the equality comparison operator.",
    "task": "A shop sells 8 items for ₹150 each. The total cost is ₹700. Create revenue and profit variables, then print two lines exactly: Revenue: 1200 and Profit: 500.",
    "hint": "First multiply units_sold by price_per_unit. Store the result in revenue. Then subtract total_cost from revenue to get profit. Use print(\"Revenue:\", revenue) and print(\"Profit:\", profit).",
    "solution": "units_sold = 8\nprice_per_unit = 150\ntotal_cost = 700\n\nrevenue = units_sold * price_per_unit\nprofit = revenue - total_cost\n\nprint(\"Revenue:\", revenue)\nprint(\"Profit:\", profit)",
    "exercise": {
      "title": "Calculate shop revenue and profit",
      "prompt": "The shop sells 8 items for ₹150 each and has a total cost of ₹700. Use the supplied variables to calculate revenue and profit. Print exactly two lines: Revenue: 1200, then Profit: 500.",
      "setup": "",
      "starter": "units_sold = 8\nprice_per_unit = 150\ntotal_cost = 700\n\n# Calculate revenue and profit below\n",
      "hint": "Revenue = units_sold * price_per_unit. Profit = revenue - total_cost. Use print(\"Revenue:\", revenue) and print(\"Profit:\", profit) to display the values.",
      "solution": "units_sold = 8\nprice_per_unit = 150\ntotal_cost = 700\n\nrevenue = units_sold * price_per_unit\nprofit = revenue - total_cost\n\nprint(\"Revenue:\", revenue)\nprint(\"Profit:\", profit)",
      "tests": [
        {
          "name": "Calculates revenue correctly",
          "code": "assert revenue == 1200",
          "expected": 1200,
          "actual": "revenue",
          "failureMessage": "Revenue is the number of items multiplied by the price per item."
        },
        {
          "name": "Calculates profit after cost",
          "code": "assert profit == 500",
          "expected": 500,
          "actual": "profit",
          "failureMessage": "Profit is revenue minus total cost. Do not subtract cost before calculating revenue."
        },
        {
          "name": "Prints the two requested results",
          "code": "assert __output__.splitlines() == ['Revenue: 1200', 'Profit: 500']",
          "expected": [
            "Revenue: 1200",
            "Profit: 500"
          ],
          "actual": "__output__.splitlines()",
          "failureMessage": "The output must contain the two requested labels and values, in the correct order."
        }
      ]
    }
  }
];
