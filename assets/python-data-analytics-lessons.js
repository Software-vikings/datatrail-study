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
  },
  {
    "id": "p1-c02",
    "curriculumId": "P1-C02",
    "prerequisites": [
      "p1-c01"
    ],
    "title": "Types, conversion and text",
    "level": "Beginner",
    "mins": 30,
    "plain": "Python values have different kinds. A whole number, a decimal number, a piece of text and a yes-or-no value are not interchangeable. Before calculating with data from a file or form, an analyst often needs to check what kind of value arrived, convert it safely and clean extra spaces or inconsistent capital letters.",
    "definition": "A data type defines the kind of value an object represents and the operations that make sense for it. Common built-in types include int for integers, float for decimal numbers, str for text, bool for True or False, and NoneType for the absence of a value. Type conversion creates a value of another type. String methods transform or inspect text; f-strings format values inside readable text.",
    "analogy": "Think of a warehouse with labelled containers. A container marked kilograms should not be treated as a date, and a box of customer names should not be added like money. Sometimes a delivery note writes a number as text, such as “ 250.50 ”. You remove the extra spaces, convert it into a number, and only then calculate with it.",
    "example": "raw_units = \" 12 \"\nraw_price = \"250.50\"\ncustomer_name = \"  AMINA Khan \"\n\nunits = int(raw_units.strip())\nprice = float(raw_price)\ncustomer = customer_name.strip().title()\nrevenue = units * price\n\ntax_rate = 18 / 100\nprint(\"Customer:\", customer)\nprint(f\"Revenue: ₹{revenue:,.2f}\")\nprint(f\"Tax rate: {tax_rate:.0%}\")\nprint(\"Has units?\", bool(units))",
    "expectedOutput": "Customer: Amina Khan\nRevenue: ₹3,006.00\nTax rate: 18%\nHas units? True",
    "prediction": "The units and price begin as text. What would happen if you tried to multiply raw_units by raw_price without converting them first?",
    "predictionAnswer": "Python would repeat the text instead of calculating a numeric revenue. Text has different behaviour from numbers. Convert the units with int() and the price with float() before multiplying.",
    "question": "Which expression converts the text \" 42 \" into the integer 42?",
    "options": [
      "str(\" 42 \")",
      "int(\" 42 \".strip())",
      "bool(\" 42 \")"
    ],
    "answer": 1,
    "why": "strip() removes spaces at the beginning and end. int() then converts the remaining digit text into an integer.",
    "task": "A shop record arrives with messy text. Clean the customer name, convert the units and unit price to numbers, calculate the gross revenue, apply the discount and create a readable receipt.",
    "hint": "Use .strip().title() for the name, int() for units and float() for the price and discount. Calculate gross_revenue first. Round the discounted result to two decimal places, then use an f-string with :,.2f for the rupee amount.",
    "solution": "raw_customer = \"  rAHUL mehta \"\nraw_units = \" 8 \"\nraw_price = \"150.50\"\nraw_discount = \"0.10\"\n\ncustomer_name = raw_customer.strip().title()\nunits = int(raw_units.strip())\nprice_per_unit = float(raw_price)\ndiscount_rate = float(raw_discount)\ngross_revenue = units * price_per_unit\nnet_revenue = round(gross_revenue * (1 - discount_rate), 2)\nreceipt = f\"{customer_name}: ₹{net_revenue:,.2f}\"\n\nprint(receipt)",
    "exercise": {
      "title": "Clean and calculate a shop receipt",
      "prompt": "Use the supplied text values to create customer_name, units, price_per_unit, discount_rate, gross_revenue, net_revenue and receipt. Clean the name, convert the values to the correct numeric types, apply the 10% discount and print the receipt.",
      "setup": "",
      "starter": "raw_customer = \"  rAHUL mehta \"\nraw_units = \" 8 \"\nraw_price = \"150.50\"\nraw_discount = \"0.10\"\n\n# Clean the name and convert the text values\n\n# Calculate gross and discounted revenue\n\n# Create and print the receipt\n",
      "hint": "Use .strip().title() for the customer name. Use int() for units and float() for the other numeric text. The final receipt should use ₹ and two decimal places.",
      "solution": "raw_customer = \"  rAHUL mehta \"\nraw_units = \" 8 \"\nraw_price = \"150.50\"\nraw_discount = \"0.10\"\n\ncustomer_name = raw_customer.strip().title()\nunits = int(raw_units.strip())\nprice_per_unit = float(raw_price)\ndiscount_rate = float(raw_discount)\ngross_revenue = units * price_per_unit\nnet_revenue = round(gross_revenue * (1 - discount_rate), 2)\nreceipt = f\"{customer_name}: ₹{net_revenue:,.2f}\"\n\nprint(receipt)",
      "tests": [
        {
          "name": "Cleans the customer's name",
          "code": "assert customer_name == 'Rahul Mehta'",
          "expected": "Rahul Mehta",
          "actual": "customer_name",
          "failureMessage": "Remove outside spaces and use title case so the name is consistent."
        },
        {
          "name": "Converts units to an integer",
          "code": "assert units == 8 and isinstance(units, int)",
          "expected": "integer 8",
          "actual": "(units, type(units).__name__)",
          "failureMessage": "The units field represents a count, so it should be an integer."
        },
        {
          "name": "Converts prices and discount to decimal numbers",
          "code": "assert isinstance(price_per_unit, float) and isinstance(discount_rate, float)",
          "expected": "float values",
          "actual": "(type(price_per_unit).__name__, type(discount_rate).__name__)",
          "failureMessage": "Use float() for text values that contain decimal points."
        },
        {
          "name": "Calculates gross revenue",
          "code": "assert gross_revenue == 1204.0",
          "expected": 1204,
          "actual": "gross_revenue",
          "failureMessage": "Multiply the number of units by the price per unit before applying the discount."
        },
        {
          "name": "Calculates discounted revenue",
          "code": "assert net_revenue == 1083.6",
          "expected": 1083.6,
          "actual": "net_revenue",
          "failureMessage": "A 10% discount means the customer pays 90% of the gross revenue."
        },
        {
          "name": "Formats the receipt correctly",
          "code": "assert receipt == 'Rahul Mehta: ₹1,083.60' and __output__.strip() == receipt",
          "expected": "Rahul Mehta: ₹1,083.60",
          "actual": "receipt",
          "failureMessage": "Use an f-string with a thousands separator and exactly two decimal places."
        }
      ]
    }
  },
  {
    "id": "p1-c03",
    "curriculumId": "P1-C03",
    "prerequisites": [
      "p1-c02"
    ],
    "title": "Decisions and business rules",
    "level": "Beginner",
    "mins": 30,
    "plain": "A business process does not always do the same thing. A paid order can move forward, an unpaid order may need to wait, and a large order may need a special label. Python can compare values and choose which instructions to run. This is how written business rules become consistent decisions.",
    "definition": "A comparison expression evaluates to a Boolean value: True or False. The operators ==, !=, <, <=, > and >= compare values. The logical operators and, or and not combine or reverse conditions. An if/elif/else statement selects a code branch based on those conditions; only the first matching branch runs.",
    "analogy": "Imagine a staff member following a checklist at a shop counter. First they check whether payment has arrived. If not, the order is held. Only when payment is complete do they check whether the order is large enough for a priority label. The order of the questions matters because one decision may prevent the next action.",
    "example": "payment_status = \"Paid\"\nbasket_total = 1250\n\nif payment_status != \"Paid\":\n    order_message = \"Hold for payment\"\nelif basket_total >= 1000:\n    order_message = \"Paid high-value order\"\nelse:\n    order_message = \"Paid standard order\"\n\nprint(order_message)",
    "expectedOutput": "Paid high-value order",
    "prediction": "The basket total is exactly 1,250 and payment status is Paid. Which branch will run? What would happen if payment_status changed to Unpaid?",
    "predictionAnswer": "The second branch runs because the payment is complete and 1,250 is greater than or equal to 1,000. If payment_status becomes Unpaid, the first branch runs and Python skips the remaining branches.",
    "question": "Which comparison checks whether amount is at least 1,000, including exactly 1,000?",
    "options": [
      "amount > 1000",
      "amount >= 1000",
      "amount = 1000"
    ],
    "answer": 1,
    "why": "The >= operator means greater than or equal to. It includes the boundary value 1,000.",
    "task": "Apply a simple order-handling policy. Hold unpaid orders. For paid orders, use a high-value message when the basket total is at least ₹1,000; otherwise use the standard paid message.",
    "hint": "Check payment_status first. Use != to detect anything other than Paid. Use elif for the high-value condition and >= so the threshold includes exactly 1,000.",
    "solution": "payment_status = \"Paid\"\nbasket_total = 1200\n\nif payment_status != \"Paid\":\n    order_message = \"Hold for payment\"\nelif basket_total >= 1000:\n    order_message = \"Paid high-value order\"\nelse:\n    order_message = \"Paid standard order\"\n\nprint(order_message)",
    "exercise": {
      "title": "Turn an order policy into Python",
      "prompt": "Use if, elif and else to classify the supplied order. Unpaid orders must be held. Paid orders worth at least ₹1,000 receive the high-value message. Other paid orders receive the standard message.",
      "setup": "",
      "starter": "payment_status = \"Paid\"\nbasket_total = 1200\n\n# Write the business rules below\norder_message = \"\"\n\nprint(order_message)",
      "hint": "The unpaid condition must be checked first. Then check basket_total >= 1000. Use else for a paid order below the threshold.",
      "solution": "payment_status = \"Paid\"\nbasket_total = 1200\n\nif payment_status != \"Paid\":\n    order_message = \"Hold for payment\"\nelif basket_total >= 1000:\n    order_message = \"Paid high-value order\"\nelse:\n    order_message = \"Paid standard order\"\n\nprint(order_message)",
      "tests": [
        {
          "name": "Classifies the paid high-value order",
          "code": "assert order_message == 'Paid high-value order'",
          "expected": "Paid high-value order",
          "actual": "order_message",
          "failureMessage": "The supplied order is paid and its basket is above the high-value threshold."
        },
        {
          "name": "Prints the business decision",
          "code": "assert __output__.strip() == order_message",
          "expected": "Paid high-value order",
          "actual": "__output__.strip()",
          "failureMessage": "Display the selected business message so a person can see the result."
        },
        {
          "name": "Checks payment before the basket threshold",
          "code": "assert __source__.find('payment_status') < __source__.find('basket_total >= 1000')",
          "expected": "payment check appears first",
          "actual": "source position of each check",
          "failureMessage": "An unpaid order must be held before applying the high-value label."
        },
        {
          "name": "Uses an inclusive threshold",
          "code": "assert '>=' in __source__",
          "expected": "a >= comparison",
          "actual": "comparison operators present in submitted code",
          "failureMessage": "The rule says at least ₹1,000, so exactly ₹1,000 must qualify."
        },
        {
          "name": "Uses a complete decision structure",
          "code": "assert 'if ' in __source__ and 'elif ' in __source__ and 'else:' in __source__",
          "expected": "if, elif and else",
          "actual": "decision keywords in submitted code",
          "failureMessage": "Write the three branches so the paid high-value, paid standard and unpaid cases are distinguishable."
        }
      ]
    }
  },
  {
    "id": "p1-c04",
    "curriculumId": "P1-C04",
    "prerequisites": [
      "p1-c03"
    ],
    "title": "Loops and repeated work",
    "level": "Beginner",
    "mins": 35,
    "plain": "Analysts often receive hundreds or thousands of records. Writing a separate instruction for every row would be slow and error-prone. A loop lets Python repeat a small set of instructions for each item. You can keep a running total, count records that match a rule and stop when the work is finished.",
    "definition": "A for loop iterates over the items in an iterable, executing an indented block once per item. range() generates a sequence of integers, often for a known number of repetitions. An accumulator stores a running result, such as a sum or count. A while loop repeats while its condition remains True. break exits a loop; continue skips to its next iteration.",
    "analogy": "Think of checking a stack of invoices. You pick up one invoice, add its amount to the running total, and decide whether it belongs in the high-value count. Then you move to the next invoice. The same small set of steps is reused until the stack is empty.",
    "example": "daily_sales = [450, 1200, 800, 1550]\n\ntotal_sales = 0\nhigh_value_days = 0\n\nfor sale in daily_sales:\n    total_sales = total_sales + sale\n    if sale >= 1000:\n        high_value_days = high_value_days + 1\n\nprint(\"Total sales:\", total_sales)\nprint(\"High-value days:\", high_value_days)\nprint(\"Days recorded:\", len(daily_sales))",
    "expectedOutput": "Total sales: 4000\nHigh-value days: 2\nDays recorded: 4",
    "prediction": "Before running the loop, add the four sale amounts yourself. How many of the days have sales of at least ₹1,000?",
    "predictionAnswer": "The total is ₹4,000. Two days meet the high-value rule: ₹1,200 and ₹1,550. The loop updates the total and count once for each sale.",
    "question": "What is the main purpose of the indented block inside a for loop?",
    "options": [
      "It runs once before the loop starts",
      "It runs once for each item the loop visits",
      "It runs only after the loop finishes"
    ],
    "answer": 1,
    "why": "Python executes the loop body once for each item in the sequence. Indentation tells Python which instructions belong to the loop.",
    "task": "Process the sales list using a for loop. Calculate the total, the number of recorded sales and the count of sales that are at least ₹1,000.",
    "hint": "Start total_sales and high_value_sales at 0. For each sale, add it to total_sales. Inside the loop, use if sale >= 1000 to increase the high-value count. Count the records with a counter that you also update inside the loop.",
    "solution": "daily_sales = [450, 1200, 800, 1550]\n\ntotal_sales = 0\nnumber_of_sales = 0\nhigh_value_sales = 0\n\nfor sale in daily_sales:\n    total_sales += sale\n    number_of_sales += 1\n    if sale >= 1000:\n        high_value_sales += 1\n\nprint(\"Total sales:\", total_sales)\nprint(\"Number of sales:\", number_of_sales)\nprint(\"High-value sales:\", high_value_sales)",
    "exercise": {
      "title": "Build a running sales summary",
      "prompt": "Use a for loop to process every amount in daily_sales. Create total_sales, number_of_sales and high_value_sales. A high-value sale is at least ₹1,000. Print all three results using the labels shown in the reference task.",
      "setup": "",
      "starter": "daily_sales = [450, 1200, 800, 1550]\n\ntotal_sales = 0\nnumber_of_sales = 0\nhigh_value_sales = 0\n\n# Process every sale with a for loop\n\nprint(\"Total sales:\", total_sales)\nprint(\"Number of sales:\", number_of_sales)\nprint(\"High-value sales:\", high_value_sales)",
      "hint": "Inside the for loop, add each sale to total_sales and increase number_of_sales by 1. Use an if statement inside the loop to count amounts greater than or equal to 1,000.",
      "solution": "daily_sales = [450, 1200, 800, 1550]\n\ntotal_sales = 0\nnumber_of_sales = 0\nhigh_value_sales = 0\n\nfor sale in daily_sales:\n    total_sales += sale\n    number_of_sales += 1\n    if sale >= 1000:\n        high_value_sales += 1\n\nprint(\"Total sales:\", total_sales)\nprint(\"Number of sales:\", number_of_sales)\nprint(\"High-value sales:\", high_value_sales)",
      "tests": [
        {
          "name": "Adds every sale to the running total",
          "code": "assert total_sales == 4000",
          "expected": 4000,
          "actual": "total_sales",
          "failureMessage": "The accumulator must receive every amount exactly once."
        },
        {
          "name": "Counts every record",
          "code": "assert number_of_sales == 4",
          "expected": 4,
          "actual": "number_of_sales",
          "failureMessage": "Increase the record counter once for each sale visited."
        },
        {
          "name": "Counts sales at the inclusive threshold",
          "code": "assert high_value_sales == 2",
          "expected": 2,
          "actual": "high_value_sales",
          "failureMessage": "Only 1,200 and 1,550 meet the rule of at least 1,000."
        },
        {
          "name": "Uses a for loop for repeated processing",
          "code": "assert 'for sale in daily_sales:' in __source__",
          "expected": "for sale in daily_sales:",
          "actual": "loop statement in submitted code",
          "failureMessage": "This exercise is about repeating the same calculation for each sale."
        },
        {
          "name": "Prints the correct summary",
          "code": "assert __output__.splitlines() == ['Total sales: 4000', 'Number of sales: 4', 'High-value sales: 2']",
          "expected": [
            "Total sales: 4000",
            "Number of sales: 4",
            "High-value sales: 2"
          ],
          "actual": "__output__.splitlines()",
          "failureMessage": "Print the three summary values in the requested order and with the correct labels."
        }
      ]
    }
  },
  {
    "id": "p1-c05",
    "curriculumId": "P1-C05",
    "prerequisites": [
      "p1-c04"
    ],
    "title": "Python collections for business data",
    "level": "Beginner",
    "mins": 40,
    "plain": "A single value is rarely enough for a business analysis. You may have a list of orders, several fields inside each order, and a need to find every unique city. Python collections organise related values so you can store, look up, update and process real records without losing track of what each value means.",
    "definition": "A list is an ordered, changeable sequence and allows repeated values. A tuple is an ordered sequence that is normally used for a fixed group of values. A dictionary stores key–value pairs, making it useful for named fields in one record. A set stores unique values and is useful for deduplication and membership checks. Indexing retrieves an item by position; dictionary lookup retrieves a value by key.",
    "analogy": "Think of a filing system. A list is a numbered tray of folders in a particular order. A dictionary is one folder with labelled tabs such as customer, city and amount. A tuple is a small fixed label such as latitude and longitude. A set is the clean visitor register where a person's name appears only once.",
    "example": "orders = [\n    {\"order_id\": \"A101\", \"city\": \"Chennai\", \"amount\": 1200},\n    {\"order_id\": \"A102\", \"city\": \"Pune\", \"amount\": 800},\n    {\"order_id\": \"A103\", \"city\": \"Chennai\", \"amount\": 500}\n]\n\nunique_cities = set()\nfor order in orders:\n    unique_cities.add(order[\"city\"])\n\nfirst_order = orders[0]\nfirst_amount = first_order[\"amount\"]\n\nprint(\"Orders:\", len(orders))\nprint(\"First amount:\", first_amount)\nprint(\"Unique cities:\", sorted(unique_cities))\nprint(\"Has Pune?\", \"Pune\" in unique_cities)",
    "expectedOutput": "Orders: 3\nFirst amount: 1200\nUnique cities: ['Chennai', 'Pune']\nHas Pune? True",
    "prediction": "The city Chennai appears twice. How many values will unique_cities contain after the set is built?",
    "predictionAnswer": "The set contains two values: Chennai and Pune. Sets remove duplicates, but the original orders list still contains all three records.",
    "question": "Which collection is most suitable for storing one order with named fields such as order_id, city and amount?",
    "options": [
      "A dictionary",
      "A set",
      "A string"
    ],
    "answer": 0,
    "why": "A dictionary stores key–value pairs. The field names become keys, so you can retrieve an order's amount using order['amount'].",
    "task": "Use the list of order dictionaries to calculate total revenue, count the orders and identify the unique cities represented in the data.",
    "hint": "Loop through orders. Each order is a dictionary, so read its amount and city by key. Add each city to a set so repeated city names are stored only once.",
    "solution": "orders = [\n    {\"order_id\": \"A101\", \"city\": \"Chennai\", \"amount\": 1200},\n    {\"order_id\": \"A102\", \"city\": \"Pune\", \"amount\": 800},\n    {\"order_id\": \"A103\", \"city\": \"Chennai\", \"amount\": 500}\n]\n\ntotal_revenue = 0\nunique_cities = set()\norder_count = 0\n\nfor order in orders:\n    total_revenue += order[\"amount\"]\n    unique_cities.add(order[\"city\"])\n    order_count += 1\n\ncity_list = sorted(unique_cities)\nprint(\"Total revenue:\", total_revenue)\nprint(\"Order count:\", order_count)\nprint(\"Cities:\", city_list)",
    "exercise": {
      "title": "Summarise a list of order records",
      "prompt": "The orders variable contains three dictionaries. Use dictionary keys to read their values, a loop to total the revenue and a set to find the unique cities. Create total_revenue, order_count, unique_cities and city_list, then print the summary.",
      "setup": "",
      "starter": "orders = [\n    {\"order_id\": \"A101\", \"city\": \"Chennai\", \"amount\": 1200},\n    {\"order_id\": \"A102\", \"city\": \"Pune\", \"amount\": 800},\n    {\"order_id\": \"A103\", \"city\": \"Chennai\", \"amount\": 500}\n]\n\ntotal_revenue = 0\norder_count = 0\nunique_cities = set()\n\n# Process the order dictionaries below\n\ncity_list = sorted(unique_cities)\nprint(\"Total revenue:\", total_revenue)\nprint(\"Order count:\", order_count)\nprint(\"Cities:\", city_list)",
      "hint": "For each order, read order['amount'] and order['city']. Add the amount to the total, increase the counter and add the city to the set. Use sorted() to make the final city list appear in a predictable order.",
      "solution": "orders = [\n    {\"order_id\": \"A101\", \"city\": \"Chennai\", \"amount\": 1200},\n    {\"order_id\": \"A102\", \"city\": \"Pune\", \"amount\": 800},\n    {\"order_id\": \"A103\", \"city\": \"Chennai\", \"amount\": 500}\n]\n\ntotal_revenue = 0\norder_count = 0\nunique_cities = set()\n\nfor order in orders:\n    total_revenue += order[\"amount\"]\n    order_count += 1\n    unique_cities.add(order[\"city\"])\n\ncity_list = sorted(unique_cities)\nprint(\"Total revenue:\", total_revenue)\nprint(\"Order count:\", order_count)\nprint(\"Cities:\", city_list)",
      "tests": [
        {
          "name": "Totals all order amounts",
          "code": "assert total_revenue == 2500",
          "expected": 2500,
          "actual": "total_revenue",
          "failureMessage": "Add 1,200, 800 and 500, one time per order."
        },
        {
          "name": "Counts the records rather than unique cities",
          "code": "assert order_count == 3",
          "expected": 3,
          "actual": "order_count",
          "failureMessage": "There are three order dictionaries, even though only two cities are represented."
        },
        {
          "name": "Removes duplicate city values with a set",
          "code": "assert unique_cities == {'Chennai', 'Pune'}",
          "expected": [
            "Chennai",
            "Pune"
          ],
          "actual": "sorted(unique_cities)",
          "failureMessage": "A set should contain each city once."
        },
        {
          "name": "Creates a stable sorted city list",
          "code": "assert city_list == ['Chennai', 'Pune']",
          "expected": [
            "Chennai",
            "Pune"
          ],
          "actual": "city_list",
          "failureMessage": "Sort the set before printing so the order is predictable."
        },
        {
          "name": "Prints a readable summary",
          "code": "assert __output__.splitlines() == ['Total revenue: 2500', 'Order count: 3', \"Cities: ['Chennai', 'Pune']\"]",
          "expected": [
            "Total revenue: 2500",
            "Order count: 3",
            "Cities: ['Chennai', 'Pune']"
          ],
          "actual": "__output__.splitlines()",
          "failureMessage": "Check the output labels, totals and list formatting."
        }
      ]
    }
  },
  {
    "id": "p1-c06",
    "curriculumId": "P1-C06",
    "prerequisites": [
      "p1-c05"
    ],
    "title": "Functions and reusable analysis",
    "level": "Beginner",
    "mins": 40,
    "plain": "When you repeat the same calculation in several places, copy-and-pasting the formula makes mistakes more likely. A function gives that calculation one clear name. You provide its inputs, Python runs its instructions and it can return a result that the rest of your analysis can reuse.",
    "definition": "A function is a named, reusable block of code defined with def. Parameters are the variable names in the function definition; arguments are the actual values supplied when it is called. return sends a result back to the caller. A local variable is created inside a function and normally exists only within that function's scope. A default parameter value is used when the caller omits that argument.",
    "analogy": "Imagine the finance team has one approved calculator for invoice totals. Anyone can supply the number of items and price, and the calculator applies the same tax rule each time. It returns the total to the person who asked. The formula is written once, checked once and reused.",
    "example": "def calculate_invoice_total(units, price_per_unit, tax_rate=0.18):\n    subtotal = units * price_per_unit\n    total = subtotal * (1 + tax_rate)\n    return round(total, 2)\n\nfirst_total = calculate_invoice_total(3, 250)\nsecond_total = calculate_invoice_total(2, 500, 0.05)\n\nprint(\"Standard tax invoice:\", first_total)\nprint(\"Custom tax invoice:\", second_total)",
    "expectedOutput": "Standard tax invoice: 885.0\nCustom tax invoice: 1050.0",
    "prediction": "The first call does not supply tax_rate. Which rate will the function use? Why does the second call produce a different tax amount?",
    "predictionAnswer": "The first call uses the default of 0.18 (18%). The second call supplies 0.05 (5%), which overrides the default for that call only.",
    "question": "What is the key difference between print(value) and return value inside a function?",
    "options": [
      "print sends text to output; return sends a result back to the code that called the function",
      "They always do exactly the same thing",
      "return can only send text, while print can send numbers"
    ],
    "answer": 0,
    "why": "print() displays information for a person to see. return makes a value available to the rest of the program so it can be stored, compared or used in another calculation.",
    "task": "Create a reusable function for invoice totals. It must multiply units by price, apply a tax rate, use 18% when no rate is supplied and return a total rounded to two decimal places.",
    "hint": "Define the function with three parameters. Give tax_rate a default value of 0.18. Calculate the subtotal inside the function and use return round(total, 2). Do not use print() as a replacement for return.",
    "solution": "def calculate_invoice_total(units, price_per_unit, tax_rate=0.18):\n    subtotal = units * price_per_unit\n    total = subtotal * (1 + tax_rate)\n    return round(total, 2)\n\nstandard_total = calculate_invoice_total(3, 250)\ncustom_total = calculate_invoice_total(2, 500, 0.05)\nprint(\"Standard:\", standard_total)\nprint(\"Custom:\", custom_total)",
    "exercise": {
      "title": "Build a reusable invoice function",
      "prompt": "Define calculate_invoice_total(units, price_per_unit, tax_rate=0.18). Calculate the subtotal, apply the supplied or default tax rate and return the total rounded to two decimal places. Then call it once with the default and once with a custom 5% rate.",
      "setup": "",
      "starter": "def calculate_invoice_total(units, price_per_unit, tax_rate=0.18):\n    # Calculate and return the tax-inclusive total\n    return 0\n\nstandard_total = calculate_invoice_total(3, 250)\ncustom_total = calculate_invoice_total(2, 500, 0.05)\n\nprint(\"Standard:\", standard_total)\nprint(\"Custom:\", custom_total)",
      "hint": "Use subtotal = units * price_per_unit. The total is subtotal * (1 + tax_rate). Return round(total, 2). A return statement gives the value back to the calling code.",
      "solution": "def calculate_invoice_total(units, price_per_unit, tax_rate=0.18):\n    subtotal = units * price_per_unit\n    total = subtotal * (1 + tax_rate)\n    return round(total, 2)\n\nstandard_total = calculate_invoice_total(3, 250)\ncustom_total = calculate_invoice_total(2, 500, 0.05)\n\nprint(\"Standard:\", standard_total)\nprint(\"Custom:\", custom_total)",
      "tests": [
        {
          "name": "Returns a numeric invoice total",
          "code": "assert calculate_invoice_total(3, 250) == 885.0",
          "expected": 885,
          "actual": "calculate_invoice_total(3, 250)",
          "failureMessage": "The default tax rate should add 18% to the subtotal."
        },
        {
          "name": "Uses a supplied tax rate",
          "code": "assert calculate_invoice_total(2, 500, 0.05) == 1050.0",
          "expected": 1050,
          "actual": "calculate_invoice_total(2, 500, 0.05)",
          "failureMessage": "A caller-supplied tax rate should override the default."
        },
        {
          "name": "Handles a zero-item invoice",
          "code": "assert calculate_invoice_total(0, 250) == 0",
          "expected": 0,
          "actual": "calculate_invoice_total(0, 250)",
          "failureMessage": "Zero units should produce a zero invoice total."
        },
        {
          "name": "Returns the result instead of only printing it",
          "code": "assert calculate_invoice_total(1, 100) is not None",
          "expected": "a returned total",
          "actual": "calculate_invoice_total(1, 100)",
          "failureMessage": "Use return so other code can store and reuse the calculation."
        },
        {
          "name": "Prints both invoice examples",
          "code": "assert __output__.splitlines() == ['Standard: 885.0', 'Custom: 1050.0']",
          "expected": [
            "Standard: 885.0",
            "Custom: 1050.0"
          ],
          "actual": "__output__.splitlines()",
          "failureMessage": "Call the function for both examples and print the returned values."
        }
      ]
    }
  },
  {
    "id": "p1-c07",
    "curriculumId": "P1-C07",
    "prerequisites": [
      "p1-c06"
    ],
    "title": "Errors, debugging and tests",
    "level": "Beginner",
    "mins": 45,
    "plain": "Real data is messy, and even experienced programmers make mistakes. Python may stop because an instruction is written incorrectly, a name does not exist, a value has the wrong type or a calculation follows the wrong rule. Debugging means finding the cause and checking a correction instead of randomly changing code.",
    "definition": "A SyntaxError means Python cannot parse the code. A NameError usually means a referenced name is not defined. A TypeError means an operation is incompatible with the supplied types. A ValueError means the type may be acceptable but the value is not valid for that operation. A traceback shows the call path and the final error. try/except handles expected runtime exceptions; an assertion is a check that a condition is True.",
    "analogy": "Imagine a delivery form that cannot be processed. The final line on the rejection notice tells you what went wrong, while the preceding details show which step produced it. You inspect the evidence, reproduce the issue with a small example, correct the responsible field and run the checks again.",
    "example": "def safe_amount(raw_text):\n    cleaned = raw_text.strip()\n    if cleaned == \"\":\n        return None\n    try:\n        return float(cleaned)\n    except ValueError:\n        return None\n\nprint(safe_amount(\" 125.50 \"))\nprint(safe_amount(\"not a number\"))",
    "expectedOutput": "125.5\nNone",
    "prediction": "What should safe_amount return for a blank string? What should happen when the text says “not a number”?",
    "predictionAnswer": "A blank string is not a usable amount, so the function returns None before conversion. Invalid numeric text raises ValueError inside float(); the except block handles that expected problem and returns None.",
    "question": "Which exception is most likely when float(\"twelve\") is attempted?",
    "options": [
      "NameError",
      "ValueError",
      "SyntaxError"
    ],
    "answer": 1,
    "why": "The instruction is valid Python and float() accepts text, but the text 'twelve' is not a valid number. That makes it a ValueError.",
    "task": "Create safe_amount(raw_text). It should remove surrounding spaces, return None for blank text, convert valid numeric text to a float and handle ValueError by returning None.",
    "hint": "Check for an empty cleaned string before calling float(). Put float(cleaned) inside try. Catch ValueError in except and return None. Do not catch every possible exception without a reason.",
    "solution": "def safe_amount(raw_text):\n    cleaned = raw_text.strip()\n    if cleaned == \"\":\n        return None\n    try:\n        return float(cleaned)\n    except ValueError:\n        return None\n\nprint(safe_amount(\" 125.50 \"))\nprint(safe_amount(\"not a number\"))",
    "exercise": {
      "title": "Convert unreliable amounts safely",
      "prompt": "Implement safe_amount(raw_text). Clean surrounding spaces. Return None for a blank string. Return a float for valid numeric text. If float() raises ValueError, handle it and return None rather than stopping the program.",
      "setup": "",
      "starter": "def safe_amount(raw_text):\n    # Clean the supplied text\n    # Handle blank input\n    # Convert inside try/except\n    return None\n\nprint(safe_amount(\" 125.50 \"))\nprint(safe_amount(\"not a number\"))",
      "hint": "Call strip() first. If the cleaned text is empty, return None. Otherwise use try: return float(cleaned) and except ValueError: return None.",
      "solution": "def safe_amount(raw_text):\n    cleaned = raw_text.strip()\n    if cleaned == \"\":\n        return None\n    try:\n        return float(cleaned)\n    except ValueError:\n        return None\n\nprint(safe_amount(\" 125.50 \"))\nprint(safe_amount(\"not a number\"))",
      "tests": [
        {
          "name": "Converts a valid amount",
          "code": "assert safe_amount('125.50') == 125.5",
          "expected": 125.5,
          "actual": "safe_amount('125.50')",
          "failureMessage": "Valid numeric text should be returned as a float."
        },
        {
          "name": "Removes surrounding spaces",
          "code": "assert safe_amount('  42.75  ') == 42.75",
          "expected": 42.75,
          "actual": "safe_amount('  42.75  ')",
          "failureMessage": "Call strip() before attempting numeric conversion."
        },
        {
          "name": "Handles blank input",
          "code": "assert safe_amount('   ') is None",
          "expected": null,
          "actual": "safe_amount('   ')",
          "failureMessage": "A blank amount should be represented as None, not as zero."
        },
        {
          "name": "Handles invalid numeric text",
          "code": "assert safe_amount('twelve') is None",
          "expected": null,
          "actual": "safe_amount('twelve')",
          "failureMessage": "Catch ValueError so one bad text value does not stop the analysis."
        },
        {
          "name": "Keeps zero as a real numeric amount",
          "code": "assert safe_amount('0') == 0.0",
          "expected": 0,
          "actual": "safe_amount('0')",
          "failureMessage": "Zero is a valid amount and should not be treated as missing."
        },
        {
          "name": "Demonstrates both valid and invalid records",
          "code": "assert __output__.splitlines() == ['125.5', 'None']",
          "expected": [
            "125.5",
            "None"
          ],
          "actual": "__output__.splitlines()",
          "failureMessage": "The sample calls should show the numeric result and the safely handled missing value."
        }
      ]
    }
  },
  {
    "id": "p1-c08",
    "curriculumId": "P1-C08",
    "prerequisites": [
      "p1-c07"
    ],
    "title": "Files, CSV, JSON and dates",
    "level": "Beginner",
    "mins": 50,
    "plain": "Business data often arrives as files rather than being typed into Python by hand. CSV files store rows and columns, JSON files store structured values, and dates need consistent handling before you group or compare records. A repeatable analyst workflow reads a source, converts its fields, checks the data and saves a result that another person can use.",
    "definition": "A file path identifies a file on a storage system. pathlib.Path provides an object-oriented way to work with paths and file contents. The csv module reads and writes comma-separated records; DictReader maps each row to field names. The json module converts between JSON text and Python values. datetime.date and datetime.datetime represent dates and times; ISO date strings can be parsed with date.fromisoformat().",
    "analogy": "Think of a monthly reporting folder. Each CSV file is a register of transactions. Python reads the rows and converts the amount column into numbers. A date is turned into a real date value so it can be grouped by month. The final summary is saved as JSON so another system can read its fields without guessing what each number means.",
    "example": "import csv\nimport io\nfrom datetime import date\n\nsales_csv = \"order_id,order_date,status,amount\\nA101,2026-01-05,Paid,1200.00\\nA102,2026-01-06,Refunded,300.00\\nA103,2026-02-01,Paid,800.00\"\n\nrows = list(csv.DictReader(io.StringIO(sales_csv)))\npaid_revenue = 0.0\nfor row in rows:\n    if row[\"status\"] == \"Paid\":\n        paid_revenue += float(row[\"amount\"])\n\nfirst_order_date = date.fromisoformat(rows[0][\"order_date\"])\nprint(\"Rows read:\", len(rows))\nprint(\"Paid revenue:\", paid_revenue)\nprint(\"First order month:\", first_order_date.strftime(\"%Y-%m\"))",
    "expectedOutput": "Rows read: 3\nPaid revenue: 2000.0\nFirst order month: 2026-01",
    "prediction": "csv.DictReader returns the amount values as text. Why does the example call float(row['amount']) before adding them?",
    "predictionAnswer": "CSV fields are read as strings. float() converts each amount into a number so Python adds the values arithmetically. Without conversion, + would join text rather than total the amounts.",
    "question": "Which function converts a Python dictionary into formatted JSON text?",
    "options": [
      "json.loads()",
      "json.dumps()",
      "csv.DictReader()"
    ],
    "answer": 1,
    "why": "json.dumps() serialises a Python value into JSON text. json.loads() does the reverse: it parses JSON text into Python values.",
    "task": "Read the supplied CSV text with DictReader, total the Paid order amounts, parse the first order date and create a summary dictionary. Save that summary to a JSON file using pathlib, then read the JSON file back into Python.",
    "hint": "Import csv, io, json, Path and date. Use csv.DictReader(io.StringIO(sales_csv)). CSV values are strings, so convert amount with float(). Parse the date using date.fromisoformat(). Use Path.write_text(json.dumps(summary, indent=2), encoding='utf-8'), then read_text() and json.loads().",
    "solution": "import csv\nimport io\nimport json\nfrom datetime import date\nfrom pathlib import Path\n\nsales_csv = \"order_id,order_date,status,amount\\nA101,2026-01-05,Paid,1200.00\\nA102,2026-01-06,Refunded,300.00\\nA103,2026-02-01,Paid,800.00\"\nrows = list(csv.DictReader(io.StringIO(sales_csv)))\npaid_rows = [row for row in rows if row[\"status\"] == \"Paid\"]\npaid_revenue = round(sum(float(row[\"amount\"]) for row in paid_rows), 2)\nfirst_order_date = date.fromisoformat(rows[0][\"order_date\"])\n\nsummary = {\n    \"row_count\": len(rows),\n    \"paid_order_count\": len(paid_rows),\n    \"paid_revenue\": paid_revenue,\n    \"first_order_month\": first_order_date.strftime(\"%Y-%m\")\n}\nreport_path = Path(\"sales_summary.json\")\nreport_path.write_text(json.dumps(summary, indent=2), encoding=\"utf-8\")\nsaved_summary = json.loads(report_path.read_text(encoding=\"utf-8\"))\n\nprint(\"Rows read:\", saved_summary[\"row_count\"])\nprint(\"Paid orders:\", saved_summary[\"paid_order_count\"])\nprint(\"Paid revenue:\", saved_summary[\"paid_revenue\"])\nprint(\"First order month:\", saved_summary[\"first_order_month\"])",
    "exercise": {
      "title": "Build a small CSV-to-JSON reporting workflow",
      "prompt": "Read sales_csv with csv.DictReader. Keep only Paid rows, calculate paid_revenue, parse the first order date, and create a summary dictionary with row_count, paid_order_count, paid_revenue and first_order_month. Save it to sales_summary.json with pathlib and load it back as saved_summary.",
      "setup": "",
      "starter": "import csv\nimport io\nimport json\nfrom datetime import date\nfrom pathlib import Path\n\nsales_csv = \"order_id,order_date,status,amount\\nA101,2026-01-05,Paid,1200.00\\nA102,2026-01-06,Refunded,300.00\\nA103,2026-02-01,Paid,800.00\"\n\n# Read the CSV rows\nrows = []\n\n# Find paid rows and calculate their revenue\npaid_rows = []\npaid_revenue = 0.0\n\n# Parse the first date and create the summary dictionary\nsummary = {}\n\n# Save and reload the JSON report\nreport_path = Path(\"sales_summary.json\")\nsaved_summary = {}\n\nprint(\"Rows read:\", saved_summary.get(\"row_count\"))\nprint(\"Paid orders:\", saved_summary.get(\"paid_order_count\"))\nprint(\"Paid revenue:\", saved_summary.get(\"paid_revenue\"))\nprint(\"First order month:\", saved_summary.get(\"first_order_month\"))",
      "hint": "Use list(csv.DictReader(io.StringIO(sales_csv))) to read rows. Build paid_rows with the status field. Convert amount text to float before adding. Use date.fromisoformat() and strftime('%Y-%m'). Write JSON text with Path.write_text(), then load it with json.loads(Path.read_text()).",
      "solution": "import csv\nimport io\nimport json\nfrom datetime import date\nfrom pathlib import Path\n\nsales_csv = \"order_id,order_date,status,amount\\nA101,2026-01-05,Paid,1200.00\\nA102,2026-01-06,Refunded,300.00\\nA103,2026-02-01,Paid,800.00\"\nrows = list(csv.DictReader(io.StringIO(sales_csv)))\npaid_rows = [row for row in rows if row[\"status\"] == \"Paid\"]\npaid_revenue = round(sum(float(row[\"amount\"]) for row in paid_rows), 2)\nfirst_order_date = date.fromisoformat(rows[0][\"order_date\"])\nfirst_order_month = first_order_date.strftime(\"%Y-%m\")\nsummary = {\n    \"row_count\": len(rows),\n    \"paid_order_count\": len(paid_rows),\n    \"paid_revenue\": paid_revenue,\n    \"first_order_month\": first_order_month\n}\nreport_path = Path(\"sales_summary.json\")\nreport_path.write_text(json.dumps(summary, indent=2), encoding=\"utf-8\")\nsaved_summary = json.loads(report_path.read_text(encoding=\"utf-8\"))\n\nprint(\"Rows read:\", saved_summary[\"row_count\"])\nprint(\"Paid orders:\", saved_summary[\"paid_order_count\"])\nprint(\"Paid revenue:\", saved_summary[\"paid_revenue\"])\nprint(\"First order month:\", saved_summary[\"first_order_month\"])",
      "tests": [
        {
          "name": "Reads every CSV record",
          "code": "assert len(rows) == 3",
          "expected": 3,
          "actual": "len(rows)",
          "failureMessage": "DictReader should produce all three data rows below the header."
        },
        {
          "name": "Identifies the paid orders",
          "code": "assert len(paid_rows) == 2",
          "expected": 2,
          "actual": "len(paid_rows)",
          "failureMessage": "Only rows with status exactly equal to Paid belong in this total."
        },
        {
          "name": "Converts CSV amount text and calculates paid revenue",
          "code": "assert paid_revenue == 2000.0",
          "expected": 2000,
          "actual": "paid_revenue",
          "failureMessage": "Convert each amount to float before adding. The refunded amount is not included."
        },
        {
          "name": "Parses the date into a reporting month",
          "code": "assert first_order_month == '2026-01'",
          "expected": "2026-01",
          "actual": "first_order_month",
          "failureMessage": "Parse the ISO date and format its year and month as YYYY-MM."
        },
        {
          "name": "Writes a JSON report file",
          "code": "assert report_path.exists()",
          "expected": true,
          "actual": "report_path.exists()",
          "failureMessage": "Use Path.write_text() to save the summary JSON to the report path."
        },
        {
          "name": "Reloads the saved JSON summary",
          "code": "assert saved_summary == {'row_count': 3, 'paid_order_count': 2, 'paid_revenue': 2000.0, 'first_order_month': '2026-01'}",
          "expected": {
            "row_count": 3,
            "paid_order_count": 2,
            "paid_revenue": 2000,
            "first_order_month": "2026-01"
          },
          "actual": "saved_summary",
          "failureMessage": "Read the saved file and parse it with json.loads() so the report is usable Python data."
        },
        {
          "name": "Prints the key report fields",
          "code": "assert __output__.splitlines() == ['Rows read: 3', 'Paid orders: 2', 'Paid revenue: 2000.0', 'First order month: 2026-01']",
          "expected": [
            "Rows read: 3",
            "Paid orders: 2",
            "Paid revenue: 2000.0",
            "First order month: 2026-01"
          ],
          "actual": "__output__.splitlines()",
          "failureMessage": "Display the values reloaded from the JSON file, in the requested order."
        }
      ]
    }
  },
  {
    "id": "p1-c09",
    "curriculumId": "P1-C09",
    "prerequisites": [
      "p1-c08"
    ],
    "title": "NumPy numerical foundations",
    "level": "Beginner → Intermediate",
    "mins": 65,
    "packages": [
      "numpy"
    ],
    "plain": "Imagine you have thousands of daily sales figures. A normal Python loop can calculate them, but NumPy gives you a compact way to work with whole groups of numbers at once. An array is like a well-organised numeric table: you can add a whole row, compare every store with its target, or calculate totals without writing one loop for every cell.",
    "definition": "NumPy's ndarray is an N-dimensional array whose elements share a data type. Its shape describes the length of each dimension, ndim counts those dimensions, and dtype describes the element type. Vectorised operations work on whole arrays. Broadcasting lets compatible shapes work together, Boolean masks select matching elements, and axis tells an aggregation which dimension to collapse. NaN represents a missing numeric value; np.isfinite identifies values that are neither NaN nor infinity.",
    "analogy": "Think of a sales worksheet with days down the rows and stores across the columns. The shape tells you how many days and stores there are. axis=1 adds across each day's row; axis=0 adds down each store's column. A target for each store can be compared with every day because NumPy broadcasts that short target row across the larger table.",
    "example": "import numpy as np\n\nsales = np.array([\n    [120, 80],\n    [140, 100],\n    [100, 130]\n])\n\nprint(\"Array shape:\", sales.shape)\nprint(\"Daily totals:\", sales.sum(axis=1))\nprint(\"Store totals:\", sales.sum(axis=0))",
    "expectedOutput": "Array shape: (3, 2)\nDaily totals: [200 240]\nStore totals: [360 310]",
    "prediction": "The array has three rows (days) and two columns (stores). What shape do you expect after adding with axis=0: three numbers or two?",
    "predictionAnswer": "Two numbers. axis=0 collapses the three rows and adds down each column, leaving one total for each of the two stores. axis=1 would collapse each row and leave three daily totals.",
    "question": "A target array has one value for each store. What happens when you compare a (4, 3) sales array with that (3,) target array?",
    "options": [
      "Each store's target is compared with its column for all four days.",
      "Only the first day is compared.",
      "NumPy always rejects arrays with different shapes."
    ],
    "answer": 0,
    "why": "Broadcasting repeats the compatible one-dimensional target across the four rows. Each sales cell is compared with the target for its store; the original arrays do not need to be manually repeated.",
    "task": "Build a 4-day by 3-store sales array. Calculate daily totals and store totals, compare each store with its target using broadcasting, select days where all three targets were met, apply a different discount rate to each store, reshape and extend the array, and calculate an average while ignoring a missing reading.",
    "hint": "Create the sales table with np.array(..., dtype=float). Use sum(axis=1) for daily totals and sum(axis=0) for store totals. Compare it directly with the three-value target array. Use .all(axis=1) for days where every store met target, np.where for labels, and np.isfinite before averaging readings that may contain np.nan.",
    "solution": "import numpy as np\n\ndaily_sales = np.array([\n    [120, 80, 50],\n    [150, 90, 70],\n    [130, 110, 60],\n    [160, 100, 90]\n], dtype=float)\nstore_targets = np.array([125, 95, 65], dtype=float)\n\ndaily_totals = daily_sales.sum(axis=1)\nstore_totals = daily_sales.sum(axis=0)\nabove_target = daily_sales >= store_targets\nhit_all_targets = above_target.all(axis=1)\ntarget_days = daily_sales[hit_all_targets]\nqualifying_revenue = float(target_days.sum())\n\ndiscount_rates = np.array([0.10, 0.05, 0.00])\nnet_sales = daily_sales * (1 - discount_rates)\nflat_sales = daily_sales.reshape(-1)\nexpanded_sales = np.concatenate(\n    [daily_sales, np.array([[180, 120, 100]], dtype=float)],\n    axis=0\n)\n\nreadings = np.array([10.0, np.nan, 14.0])\nfinite_readings = readings[np.isfinite(readings)]\naverage_reading = float(finite_readings.mean())\nstatus = np.where(hit_all_targets, \"Target met\", \"Below target\")\n\nprint(\"Daily totals:\", daily_totals.tolist())\nprint(\"Store totals:\", store_totals.tolist())\nprint(\"Target days:\", int(hit_all_targets.sum()))\nprint(\"Revenue on target days:\", qualifying_revenue)\nprint(\"Average valid reading:\", average_reading)",
    "exercise": {
      "title": "Analyse daily sales with NumPy arrays",
      "prompt": "Complete the sales analysis below. Keep daily_sales as a two-dimensional NumPy array. Calculate totals by day and by store, identify days when every store met its own target, apply the store-specific discounts to the whole array, demonstrate reshape and concatenate, and calculate the mean of only finite readings.",
      "setup": "",
      "starter": "import numpy as np\n\ndaily_sales = np.array([\n    [120, 80, 50],\n    [150, 90, 70],\n    [130, 110, 60],\n    [160, 100, 90]\n], dtype=float)\nstore_targets = np.array([125, 95, 65], dtype=float)\n\n# One total for each day (row).\ndaily_totals = None\n\n# One total for each store (column).\nstore_totals = None\n\n# NumPy compares each column with its store target.\nabove_target = None\nhit_all_targets = None\ntarget_days = None\nqualifying_revenue = None\n\n# Apply a 10%, 5%, and 0% discount by store.\ndiscount_rates = np.array([0.10, 0.05, 0.00])\nnet_sales = None\n\n# Flatten and add one new day as another row.\nflat_sales = None\nexpanded_sales = None\n\n# Ignore NaN and infinity before calculating the mean.\nreadings = np.array([10.0, np.nan, 14.0])\nfinite_readings = None\naverage_reading = None\n\nstatus = None\n\nprint(\"Daily totals:\", daily_totals)\nprint(\"Store totals:\", store_totals)\nprint(\"Target days:\", int(hit_all_targets.sum()))\nprint(\"Revenue on target days:\", qualifying_revenue)\nprint(\"Average valid reading:\", average_reading)",
      "hint": "Use daily_sales.sum(axis=1) and daily_sales.sum(axis=0). The target comparison already broadcasts: daily_sales >= store_targets. Apply .all(axis=1) to require all three stores to meet target. For discounts, multiply by (1 - discount_rates). Use reshape(-1), concatenate(..., axis=0), and np.isfinite(readings).",
      "solution": "import numpy as np\n\ndaily_sales = np.array([\n    [120, 80, 50],\n    [150, 90, 70],\n    [130, 110, 60],\n    [160, 100, 90]\n], dtype=float)\nstore_targets = np.array([125, 95, 65], dtype=float)\n\ndaily_totals = daily_sales.sum(axis=1)\nstore_totals = daily_sales.sum(axis=0)\nabove_target = daily_sales >= store_targets\nhit_all_targets = above_target.all(axis=1)\ntarget_days = daily_sales[hit_all_targets]\nqualifying_revenue = float(target_days.sum())\n\ndiscount_rates = np.array([0.10, 0.05, 0.00])\nnet_sales = daily_sales * (1 - discount_rates)\nflat_sales = daily_sales.reshape(-1)\nexpanded_sales = np.concatenate(\n    [daily_sales, np.array([[180, 120, 100]], dtype=float)],\n    axis=0\n)\n\nreadings = np.array([10.0, np.nan, 14.0])\nfinite_readings = readings[np.isfinite(readings)]\naverage_reading = float(finite_readings.mean())\nstatus = np.where(hit_all_targets, \"Target met\", \"Below target\")\n\nprint(\"Daily totals:\", daily_totals.tolist())\nprint(\"Store totals:\", store_totals.tolist())\nprint(\"Target days:\", int(hit_all_targets.sum()))\nprint(\"Revenue on target days:\", qualifying_revenue)\nprint(\"Average valid reading:\", average_reading)",
      "tests": [
        {
          "name": "Creates a two-dimensional array with the intended shape",
          "code": "assert daily_sales.shape == (4, 3) and daily_sales.ndim == 2",
          "expected": [
            4,
            3
          ],
          "actual": "list(daily_sales.shape)",
          "failureMessage": "The four rows are days and the three columns are stores."
        },
        {
          "name": "Aggregates across rows for daily totals",
          "code": "assert np.array_equal(daily_totals, np.array([250, 310, 300, 350]))",
          "expected": [
            250,
            310,
            300,
            350
          ],
          "actual": "daily_totals.tolist()",
          "failureMessage": "Use axis=1 to collapse each row into one daily total."
        },
        {
          "name": "Aggregates down columns for store totals",
          "code": "assert np.array_equal(store_totals, np.array([560, 380, 270]))",
          "expected": [
            560,
            380,
            270
          ],
          "actual": "store_totals.tolist()",
          "failureMessage": "Use axis=0 to collapse the days and keep one total per store."
        },
        {
          "name": "Broadcasts each store target across every day",
          "code": "assert np.array_equal(above_target, np.array([[False, False, False], [True, False, True], [True, True, False], [True, True, True]]))",
          "expected": [
            [
              false,
              false,
              false
            ],
            [
              true,
              false,
              true
            ],
            [
              true,
              true,
              false
            ],
            [
              true,
              true,
              true
            ]
          ],
          "actual": "above_target.tolist()",
          "failureMessage": "Compare the (4, 3) sales array directly with the (3,) target array."
        },
        {
          "name": "Uses a Boolean mask to select days meeting every target",
          "code": "assert target_days.shape == (1, 3) and qualifying_revenue == 350.0",
          "expected": [
            1,
            3,
            350
          ],
          "actual": "[list(target_days.shape), qualifying_revenue]",
          "failureMessage": "Use .all(axis=1) for the day-level condition, then use that Boolean mask to select rows."
        },
        {
          "name": "Applies vectorised store-specific discounts",
          "code": "assert np.allclose(net_sales[0], np.array([108.0, 76.0, 50.0]))",
          "expected": [
            108,
            76,
            50
          ],
          "actual": "net_sales[0].tolist()",
          "failureMessage": "Multiply the full sales array by one minus the three store discount rates."
        },
        {
          "name": "Reshapes and concatenates without losing the data",
          "code": "assert flat_sales.shape == (12,) and expanded_sales.shape == (5, 3)",
          "expected": [
            [
              12
            ],
            [
              5,
              3
            ]
          ],
          "actual": "[list(flat_sales.shape), list(expanded_sales.shape)]",
          "failureMessage": "reshape(-1) makes one flat array; concatenate with axis=0 adds a new day as a row."
        },
        {
          "name": "Excludes non-finite readings before averaging",
          "code": "assert int(np.isfinite(readings).sum()) == 2 and average_reading == 12.0",
          "expected": [
            2,
            12
          ],
          "actual": "[int(np.isfinite(readings).sum()), average_reading]",
          "failureMessage": "NaN is not an ordinary number. Build a finite-value mask before taking the mean."
        },
        {
          "name": "Labels target days with np.where",
          "code": "assert status.tolist() == ['Below target', 'Below target', 'Below target', 'Target met']",
          "expected": [
            "Below target",
            "Below target",
            "Below target",
            "Target met"
          ],
          "actual": "status.tolist()",
          "failureMessage": "np.where selects one label when the Boolean condition is true and another when it is false."
        }
      ]
    }
  },
  {
    "id": "p1-c10",
    "curriculumId": "P1-C10",
    "prerequisites": [
      "p1-c09"
    ],
    "title": "pandas: tables from files",
    "level": "Beginner → Intermediate",
    "mins": 60,
    "packages": [
      "numpy",
      "pandas"
    ],
    "plain": "Analysts rarely receive data as a neat Python list. They receive CSV files, Excel workbooks or exported reports. pandas gives you a table called a DataFrame, so you can inspect many rows and columns together, understand what each column contains and save a processed table for the next person.",
    "definition": "A pandas Series is a labelled one-dimensional sequence; a DataFrame is a labelled two-dimensional table made of Series. read_csv() and read_json() load supported file formats, while read_excel() loads workbook sheets when a compatible Excel engine is installed. shape reports rows and columns, columns lists field names, dtypes reports column types, info() gives a compact structural summary, describe() summarises numeric columns, and to_csv()/to_excel() export a table.",
    "analogy": "A DataFrame is like a register with labelled columns and numbered rows. The column headings tell you what each value means. Before calculating anything, you check how many rows arrived, whether the amount column is numeric, and whether the date column is really a date. This is the analyst's equivalent of checking a delivery before using it.",
    "example": "import pandas as pd\nfrom io import StringIO\n\ncsv_text = \"\"\"order_id,city,amount,status\nA101,Chennai,1200,Paid\nA102,Pune,5400,Paid\nA103,Chennai,800,Refunded\"\"\"\n\norders = pd.read_csv(StringIO(csv_text))\n\nprint(\"Shape:\", orders.shape)\nprint(\"Columns:\", list(orders.columns))\nprint(\"Paid orders:\", int(orders[\"status\"].eq(\"Paid\").sum()))",
    "expectedOutput": "Shape: (3, 4)\nColumns: ['order_id', 'city', 'amount', 'status']\nPaid orders: 2",
    "prediction": "read_csv() reads the CSV amount field. What should you check before trusting a calculation: the column's displayed values alone, or its data type as well?",
    "predictionAnswer": "Check both. A column can look numeric while still being stored as text. The dtype tells you what pandas will do in calculations; parse or convert the column deliberately when needed.",
    "question": "Which pandas object is designed to hold a labelled two-dimensional table?",
    "options": [
      "A Series",
      "A DataFrame",
      "A Python set"
    ],
    "answer": 1,
    "why": "A DataFrame is the table: it has labelled rows and columns. A Series is one labelled column or one-dimensional sequence.",
    "task": "Read the supplied orders CSV into a DataFrame. Parse the date column, inspect its shape and columns, select Paid orders, export them to a new CSV file and read that saved file back into a second DataFrame.",
    "hint": "Use pd.read_csv(StringIO(orders_csv), parse_dates=['order_date']). Check .shape and .columns. Filter with orders.loc[orders['status'].eq('Paid')]. Save with to_csv(..., index=False), then read the exported CSV again with parse_dates.",
    "solution": "import pandas as pd\nfrom io import StringIO\nfrom pathlib import Path\n\norders_csv = \"\"\"order_id,order_date,city,amount,status\nA101,2026-01-05,Chennai,1200,Paid\nA102,2026-01-06,Pune,5400,Paid\nA103,2026-01-08,Chennai,800,Refunded\nA104,2026-02-01,Bengaluru,3200,Paid\nA105,2026-02-03,Hyderabad,2100,Paid\"\"\"\n\norders = pd.read_csv(StringIO(orders_csv), parse_dates=[\"order_date\"])\npaid_orders = orders.loc[orders[\"status\"].eq(\"Paid\")].copy()\npaid_orders.to_csv(\"paid_orders.csv\", index=False)\nreloaded = pd.read_csv(\"paid_orders.csv\", parse_dates=[\"order_date\"])\n\nprint(\"Rows loaded:\", len(orders))\nprint(\"Paid orders:\", len(paid_orders))\nprint(\"Paid revenue:\", float(paid_orders[\"amount\"].sum()))",
    "exercise": {
      "title": "Load, inspect and export an orders table",
      "prompt": "Use pandas to load the CSV text as a DataFrame, parse order_date as a real date, select only Paid orders, export those rows to paid_orders.csv and load that file back into reloaded. Keep the original orders DataFrame unchanged.",
      "setup": "",
      "starter": "import pandas as pd\nfrom io import StringIO\nfrom pathlib import Path\n\norders_csv = \"\"\"order_id,order_date,city,amount,status\nA101,2026-01-05,Chennai,1200,Paid\nA102,2026-01-06,Pune,5400,Paid\nA103,2026-01-08,Chennai,800,Refunded\nA104,2026-02-01,Bengaluru,3200,Paid\nA105,2026-02-03,Hyderabad,2100,Paid\"\"\"\n\n# Load the CSV text into a DataFrame and parse the date.\norders = None\n\n# Keep only Paid orders in a separate DataFrame.\npaid_orders = None\n\n# Export the filtered table and load it back.\noutput_path = Path(\"paid_orders.csv\")\nreloaded = None\n\nprint(\"Rows loaded:\", len(orders))\nprint(\"Paid orders:\", len(paid_orders))\nprint(\"Paid revenue:\", float(paid_orders[\"amount\"].sum()))",
      "hint": "Pass StringIO(orders_csv) to pd.read_csv and put 'order_date' in parse_dates. Use .loc with .eq('Paid') to select rows. Call paid_orders.to_csv(output_path, index=False), then pd.read_csv(output_path, parse_dates=['order_date']).",
      "solution": "import pandas as pd\nfrom io import StringIO\nfrom pathlib import Path\n\norders_csv = \"\"\"order_id,order_date,city,amount,status\nA101,2026-01-05,Chennai,1200,Paid\nA102,2026-01-06,Pune,5400,Paid\nA103,2026-01-08,Chennai,800,Refunded\nA104,2026-02-01,Bengaluru,3200,Paid\nA105,2026-02-03,Hyderabad,2100,Paid\"\"\"\n\norders = pd.read_csv(StringIO(orders_csv), parse_dates=[\"order_date\"])\npaid_orders = orders.loc[orders[\"status\"].eq(\"Paid\")].copy()\noutput_path = Path(\"paid_orders.csv\")\npaid_orders.to_csv(output_path, index=False)\nreloaded = pd.read_csv(output_path, parse_dates=[\"order_date\"])\n\nprint(\"Rows loaded:\", len(orders))\nprint(\"Paid orders:\", len(paid_orders))\nprint(\"Paid revenue:\", float(paid_orders[\"amount\"].sum()))",
      "tests": [
        {
          "name": "Loads all five records into a DataFrame",
          "code": "assert isinstance(orders, pd.DataFrame) and orders.shape == (5, 5)",
          "expected": [
            5,
            5
          ],
          "actual": "list(orders.shape)",
          "failureMessage": "read_csv should create one DataFrame with five data rows and five columns."
        },
        {
          "name": "Preserves the source column names",
          "code": "assert orders.columns.tolist() == ['order_id', 'order_date', 'city', 'amount', 'status']",
          "expected": [
            "order_id",
            "order_date",
            "city",
            "amount",
            "status"
          ],
          "actual": "orders.columns.tolist()",
          "failureMessage": "Keep the original field names so the later selections refer to the correct columns."
        },
        {
          "name": "Parses amounts as numeric values and dates as dates",
          "code": "assert pd.api.types.is_numeric_dtype(orders['amount']) and pd.api.types.is_datetime64_any_dtype(orders['order_date'])",
          "expected": [
            "numeric amount",
            "datetime date"
          ],
          "actual": "[str(orders['amount'].dtype), str(orders['order_date'].dtype)]",
          "failureMessage": "Use parse_dates for order_date. Check the dtype rather than assuming CSV text was interpreted correctly."
        },
        {
          "name": "Selects exactly the Paid orders",
          "code": "assert paid_orders['order_id'].tolist() == ['A101', 'A102', 'A104', 'A105']",
          "expected": [
            "A101",
            "A102",
            "A104",
            "A105"
          ],
          "actual": "paid_orders['order_id'].tolist()",
          "failureMessage": "The Refunded A103 row must not be included."
        },
        {
          "name": "Calculates Paid revenue from numeric values",
          "code": "assert float(paid_orders['amount'].sum()) == 11900.0",
          "expected": 11900,
          "actual": "float(paid_orders['amount'].sum())",
          "failureMessage": "The four Paid rows total 11,900; the refunded amount is excluded."
        },
        {
          "name": "Writes the filtered table to a real CSV file",
          "code": "assert output_path.exists()",
          "expected": true,
          "actual": "output_path.exists()",
          "failureMessage": "to_csv must write the filtered DataFrame to the requested path."
        },
        {
          "name": "Reloads the exported rows and preserves the date column",
          "code": "assert reloaded.shape == (4, 5) and pd.api.types.is_datetime64_any_dtype(reloaded['order_date'])",
          "expected": [
            4,
            5,
            "datetime"
          ],
          "actual": "[list(reloaded.shape), str(reloaded['order_date'].dtype)]",
          "failureMessage": "Read the exported CSV into a new DataFrame and parse its date column again."
        }
      ]
    }
  },
  {
    "id": "p1-c11",
    "curriculumId": "P1-C11",
    "prerequisites": [
      "p1-c10"
    ],
    "title": "Selecting, filtering and transforming rows",
    "level": "Intermediate",
    "mins": 65,
    "packages": [
      "numpy",
      "pandas"
    ],
    "plain": "A business question rarely needs every row and every column. You may need only Paid orders over ₹2,000, sorted from largest to smallest, with city names cleaned and a month column added. pandas lets you select the exact part of a table you need and create useful columns without changing the meaning of the original records.",
    "definition": "Column selection chooses one or more Series from a DataFrame. loc selects by labels and Boolean conditions; iloc selects by integer position. Boolean masks filter rows, and compound conditions use parentheses with &, | and ~. sort_values() orders records. String methods under .str clean text, datetime properties under .dt extract date parts, and assigning a new column creates a derived field. Use .copy() when you intend to modify a filtered subset independently.",
    "analogy": "Imagine a filing cabinet containing every invoice. Selecting columns is choosing which fields to look at; filtering is pulling out only invoices that meet the rule; sorting puts the largest invoice first. A derived column is an extra label you add to help the business answer a question.",
    "example": "import pandas as pd\n\norders = pd.DataFrame({\n    \"order_id\": [\"A101\", \"A102\", \"A103\"],\n    \"city\": [\" chennai \", \"Pune\", \"CHENNAI\"],\n    \"amount\": [1200, 5400, 3200],\n    \"status\": [\"Paid\", \"Paid\", \"Refunded\"]\n})\n\npaid = orders.loc[orders[\"status\"].eq(\"Paid\")].copy()\npaid = paid.sort_values(\"amount\", ascending=False)\n\nprint(\"Paid order IDs:\", paid[\"order_id\"].tolist())\nprint(\"Selected columns:\", orders.loc[:, [\"order_id\", \"amount\"]].columns.tolist())",
    "expectedOutput": "Paid order IDs: ['A102', 'A101']\nSelected columns: ['order_id', 'amount']",
    "prediction": "Why does the example use .copy() after filtering the Paid orders instead of immediately changing the original orders table?",
    "predictionAnswer": "copy() makes an independent DataFrame for the next steps. It avoids accidental changes to the source and makes the intention clear when adding or changing columns on a filtered result.",
    "question": "Which selector retrieves rows and columns by integer position?",
    "options": [
      "loc",
      "iloc",
      "groupby"
    ],
    "answer": 1,
    "why": "iloc uses integer positions, such as the first two rows with df.iloc[:2]. loc uses row and column labels or Boolean conditions.",
    "task": "Select the requested columns and first two rows. Filter Paid orders worth at least ₹2,000, sort them from highest to lowest, clean city names, parse the order dates, create a reporting month and assign a High/Standard value band.",
    "hint": "Use orders.loc[:, [...]] for columns and .iloc[:2] for the first two records. Put each Boolean condition in parentheses and join them with &. Then use sort_values(), .str.strip().str.title(), pd.to_datetime(...), .dt.to_period('M') and np.where().",
    "solution": "import numpy as np\nimport pandas as pd\n\norders = pd.DataFrame({\n    \"order_id\": [\"A101\", \"A102\", \"A103\", \"A104\", \"A105\", \"A106\"],\n    \"customer\": [\"Asha\", \"Rahul\", \"Meera\", \"Asha\", \"Imran\", \"Kavya\"],\n    \"city\": [\" chennai \", \"Pune\", \"Bengaluru\", \"CHENNAI\", \"Chennai\", \"Hyderabad\"],\n    \"order_date\": [\"2026-01-05\", \"2026-01-06\", \"2026-01-07\", \"2026-01-10\", \"2026-01-11\", \"2026-01-12\"],\n    \"amount\": [1200, 5400, 800, 3200, 7200, 2100],\n    \"status\": [\"Paid\", \"Paid\", \"Refunded\", \"Paid\", \"Pending\", \"Paid\"]\n})\n\nselected = orders.loc[:, [\"order_id\", \"city\", \"amount\"]]\nfirst_two = selected.iloc[:2, :]\npaid_high = orders.loc[\n    (orders[\"status\"] == \"Paid\") & (orders[\"amount\"] >= 2000)\n].copy()\npaid_high = paid_high.sort_values(\"amount\", ascending=False)\n\norders[\"city_clean\"] = orders[\"city\"].str.strip().str.title()\norders[\"order_date\"] = pd.to_datetime(orders[\"order_date\"])\norders[\"order_month\"] = orders[\"order_date\"].dt.to_period(\"M\").astype(str)\norders[\"value_band\"] = np.where(orders[\"amount\"] >= 5000, \"High\", \"Standard\")\n\nprint(\"Paid high-value orders:\", paid_high[\"order_id\"].tolist())\nprint(\"Cleaned cities:\", orders[\"city_clean\"].head(3).tolist())",
    "exercise": {
      "title": "Build a focused orders view",
      "prompt": "From the supplied orders table, create a three-column selected view, get its first two rows by position, filter Paid orders with amount >= 2000, sort them from highest to lowest, clean every city name, parse order_date, create order_month in YYYY-MM format and classify each order as High (>= 5000) or Standard.",
      "setup": "",
      "starter": "import numpy as np\nimport pandas as pd\n\norders = pd.DataFrame({\n    \"order_id\": [\"A101\", \"A102\", \"A103\", \"A104\", \"A105\", \"A106\"],\n    \"customer\": [\"Asha\", \"Rahul\", \"Meera\", \"Asha\", \"Imran\", \"Kavya\"],\n    \"city\": [\" chennai \", \"Pune\", \"Bengaluru\", \"CHENNAI\", \"Chennai\", \"Hyderabad\"],\n    \"order_date\": [\"2026-01-05\", \"2026-01-06\", \"2026-01-07\", \"2026-01-10\", \"2026-01-11\", \"2026-01-12\"],\n    \"amount\": [1200, 5400, 800, 3200, 7200, 2100],\n    \"status\": [\"Paid\", \"Paid\", \"Refunded\", \"Paid\", \"Pending\", \"Paid\"]\n})\n\n# Select only the three requested columns.\nselected = None\n\n# Use integer positions to retrieve the first two rows.\nfirst_two = None\n\n# Apply both business conditions, then sort the result.\npaid_high = None\n\n# Create cleaned text and date-based analytical columns.\norders[\"city_clean\"] = None\norders[\"order_date\"] = None\norders[\"order_month\"] = None\norders[\"value_band\"] = None\n\nprint(\"Paid high-value orders:\", paid_high[\"order_id\"].tolist())\nprint(\"Cleaned cities:\", orders[\"city_clean\"].head(3).tolist())",
      "hint": "Use .loc[:, ['order_id', 'city', 'amount']] to select columns and .iloc[:2, :] for two rows. For the filter, combine (orders['status'] == 'Paid') & (orders['amount'] >= 2000). Use .copy() before sorting. Clean with .str.strip().str.title(), parse with pd.to_datetime(), and create value_band with np.where().",
      "solution": "import numpy as np\nimport pandas as pd\n\norders = pd.DataFrame({\n    \"order_id\": [\"A101\", \"A102\", \"A103\", \"A104\", \"A105\", \"A106\"],\n    \"customer\": [\"Asha\", \"Rahul\", \"Meera\", \"Asha\", \"Imran\", \"Kavya\"],\n    \"city\": [\" chennai \", \"Pune\", \"Bengaluru\", \"CHENNAI\", \"Chennai\", \"Hyderabad\"],\n    \"order_date\": [\"2026-01-05\", \"2026-01-06\", \"2026-01-07\", \"2026-01-10\", \"2026-01-11\", \"2026-01-12\"],\n    \"amount\": [1200, 5400, 800, 3200, 7200, 2100],\n    \"status\": [\"Paid\", \"Paid\", \"Refunded\", \"Paid\", \"Pending\", \"Paid\"]\n})\n\nselected = orders.loc[:, [\"order_id\", \"city\", \"amount\"]]\nfirst_two = selected.iloc[:2, :]\npaid_high = orders.loc[\n    (orders[\"status\"] == \"Paid\") & (orders[\"amount\"] >= 2000)\n].copy()\npaid_high = paid_high.sort_values(\"amount\", ascending=False)\n\norders[\"city_clean\"] = orders[\"city\"].str.strip().str.title()\norders[\"order_date\"] = pd.to_datetime(orders[\"order_date\"])\norders[\"order_month\"] = orders[\"order_date\"].dt.to_period(\"M\").astype(str)\norders[\"value_band\"] = np.where(orders[\"amount\"] >= 5000, \"High\", \"Standard\")\n\nprint(\"Paid high-value orders:\", paid_high[\"order_id\"].tolist())\nprint(\"Cleaned cities:\", orders[\"city_clean\"].head(3).tolist())",
      "tests": [
        {
          "name": "Selects only the requested columns",
          "code": "assert selected.columns.tolist() == ['order_id', 'city', 'amount']",
          "expected": [
            "order_id",
            "city",
            "amount"
          ],
          "actual": "selected.columns.tolist()",
          "failureMessage": "Use loc with the explicit list of column labels."
        },
        {
          "name": "Uses iloc to retrieve the first two rows",
          "code": "assert first_two['order_id'].tolist() == ['A101', 'A102']",
          "expected": [
            "A101",
            "A102"
          ],
          "actual": "first_two['order_id'].tolist()",
          "failureMessage": "iloc slices rows by integer position, not by the displayed order ID."
        },
        {
          "name": "Combines both filter conditions correctly",
          "code": "assert paid_high['order_id'].tolist() == ['A102', 'A104', 'A106']",
          "expected": [
            "A102",
            "A104",
            "A106"
          ],
          "actual": "paid_high['order_id'].tolist()",
          "failureMessage": "Keep only Paid orders whose amount is at least 2,000."
        },
        {
          "name": "Sorts the filtered rows from highest amount to lowest",
          "code": "assert paid_high['amount'].tolist() == [5400, 3200, 2100]",
          "expected": [
            5400,
            3200,
            2100
          ],
          "actual": "paid_high['amount'].tolist()",
          "failureMessage": "Use sort_values('amount', ascending=False)."
        },
        {
          "name": "Cleans whitespace and city capitalisation",
          "code": "assert orders['city_clean'].tolist() == ['Chennai', 'Pune', 'Bengaluru', 'Chennai', 'Chennai', 'Hyderabad']",
          "expected": [
            "Chennai",
            "Pune",
            "Bengaluru",
            "Chennai",
            "Chennai",
            "Hyderabad"
          ],
          "actual": "orders['city_clean'].tolist()",
          "failureMessage": "Use the .str accessor with strip() and title() to standardise the city values."
        },
        {
          "name": "Parses dates and creates a year-month column",
          "code": "assert pd.api.types.is_datetime64_any_dtype(orders['order_date']) and orders['order_month'].tolist() == ['2026-01'] * 6",
          "expected": [
            "datetime",
            "2026-01"
          ],
          "actual": "[str(orders['order_date'].dtype), orders['order_month'].tolist()]",
          "failureMessage": "Convert order_date before accessing its .dt date properties."
        },
        {
          "name": "Creates the requested High and Standard categories",
          "code": "assert orders['value_band'].tolist() == ['Standard', 'High', 'Standard', 'Standard', 'High', 'Standard']",
          "expected": [
            "Standard",
            "High",
            "Standard",
            "Standard",
            "High",
            "Standard"
          ],
          "actual": "orders['value_band'].tolist()",
          "failureMessage": "Use np.where with the inclusive amount >= 5000 boundary."
        }
      ]
    }
  },
  {
    "id": "p1-c12",
    "curriculumId": "P1-C12",
    "prerequisites": [
      "p1-c11"
    ],
    "title": "Data cleaning and quality checks",
    "level": "Intermediate",
    "mins": 70,
    "packages": [
      "numpy",
      "pandas"
    ],
    "plain": "Real datasets can contain duplicate orders, misspelled city names, blank cells, text inside number columns and dates that cannot be understood. Cleaning is not simply deleting anything unusual. First measure the problems, decide which records can be corrected or safely excluded, and keep a clear count of what changed.",
    "definition": "Data-quality checks examine completeness, uniqueness, validity, consistency and plausibility. isna()/notna() detect missing values; duplicated() identifies repeated keys; drop_duplicates() applies a chosen duplicate policy; to_numeric() and to_datetime() convert fields with an explicit error policy. A cleaning audit records counts before and after each decision so the effect on the dataset can be explained and reproduced.",
    "analogy": "Think of checking an invoice register before sending it to finance. If an order number appears twice, you decide which record is authoritative. If an amount says 'unknown', you do not quietly turn it into zero. You record the issue, apply a rule, and count how many rows remain after the checks.",
    "example": "import pandas as pd\n\nraw = pd.DataFrame({\n    \"order_id\": [501, 502, 502, 503],\n    \"amount\": [\"1200\", \"2400\", \"2400\", \"unknown\"]\n})\n\nprint(\"Duplicate order IDs:\", int(raw.duplicated(\"order_id\").sum()))\namounts = pd.to_numeric(raw[\"amount\"], errors=\"coerce\")\nprint(\"Amounts that need review:\", int(amounts.isna().sum()))",
    "expectedOutput": "Duplicate order IDs: 1\nAmounts that need review: 1",
    "prediction": "If to_numeric(..., errors='coerce') receives the text 'unknown', should it invent a value of zero?",
    "predictionAnswer": "No. With errors='coerce', an invalid numeric value becomes a missing value (NaN). That makes the problem visible and lets you decide whether to correct, flag or exclude the row.",
    "question": "Why should an analyst count and document rows removed during cleaning?",
    "options": [
      "So the cleaned table is always smaller.",
      "So the effect of each cleaning rule can be explained and reconciled.",
      "Because pandas requires every DataFrame to have fewer rows."
    ],
    "answer": 1,
    "why": "Cleaning choices can change totals and business conclusions. An audit count shows what was removed or corrected and makes the work explainable.",
    "task": "Clean the supplied order register. Count duplicate IDs before removing duplicates, standardise city names, convert amount and order_date safely, count invalid or missing fields, exclude rows that fail the stated validity rules and calculate the retained revenue.",
    "hint": "Count duplicated keys first. Use drop_duplicates(..., keep='first'). Replace blank city text with np.nan before strip/title. Convert amount with pd.to_numeric(errors='coerce') and dates with pd.to_datetime(errors='coerce'). Build a Boolean valid_rows mask, then use .loc[valid_rows].copy().",
    "solution": "import numpy as np\nimport pandas as pd\n\nraw_orders = pd.DataFrame({\n    \"order_id\": [501, 502, 502, 503, 504, 505, 506, 507],\n    \"city\": [\" chennai \", \"PUNE\", \"PUNE\", \"Chennai\", \"Bengaluru\", None, \" Hyderabad \", \"Mumbai\"],\n    \"amount\": [\"1200\", \"2400\", \"2400\", \"unknown\", \"-500\", \"900\", \"1500\", \"1800\"],\n    \"order_date\": [\"2026-01-05\", \"2026-01-06\", \"2026-01-06\", \"not-a-date\", \"2026-01-08\", \"2026-01-09\", \"2026-01-10\", \"2026-01-11\"]\n})\n\nduplicate_count = int(raw_orders.duplicated(subset=[\"order_id\"]).sum())\nclean_orders = raw_orders.drop_duplicates(subset=[\"order_id\"], keep=\"first\").copy()\nclean_orders[\"city\"] = (\n    clean_orders[\"city\"]\n    .replace(r\"^\\s*$\", np.nan, regex=True)\n    .str.strip()\n    .str.title()\n)\nclean_orders[\"amount\"] = pd.to_numeric(clean_orders[\"amount\"], errors=\"coerce\")\nclean_orders[\"order_date\"] = pd.to_datetime(clean_orders[\"order_date\"], errors=\"coerce\")\n\ninvalid_amount_count = int(clean_orders[\"amount\"].isna().sum())\nnegative_amount_count = int(clean_orders[\"amount\"].lt(0).sum())\ninvalid_date_count = int(clean_orders[\"order_date\"].isna().sum())\nmissing_city_count = int(clean_orders[\"city\"].isna().sum())\n\nvalid_rows = (\n    clean_orders[\"city\"].notna()\n    & clean_orders[\"amount\"].notna()\n    & clean_orders[\"amount\"].ge(0)\n    & clean_orders[\"order_date\"].notna()\n)\ninvalid_row_count = int((~valid_rows).sum())\nclean_orders = clean_orders.loc[valid_rows].copy()\nclean_revenue = float(clean_orders[\"amount\"].sum())\n\nprint(\"Duplicate IDs:\", duplicate_count)\nprint(\"Rows retained:\", len(clean_orders))\nprint(\"Clean revenue:\", clean_revenue)",
    "exercise": {
      "title": "Clean an imperfect order register with an audit trail",
      "prompt": "Apply a clear cleaning policy to raw_orders: keep the first occurrence of each order_id; standardise city names; convert amount and order_date with errors='coerce'; count invalid amounts, negative amounts, invalid dates and missing cities; retain only rows with a city, a valid non-negative amount and a valid date. Preserve the cleaned table and calculate its revenue.",
      "setup": "",
      "starter": "import numpy as np\nimport pandas as pd\n\nraw_orders = pd.DataFrame({\n    \"order_id\": [501, 502, 502, 503, 504, 505, 506, 507],\n    \"city\": [\" chennai \", \"PUNE\", \"PUNE\", \"Chennai\", \"Bengaluru\", None, \" Hyderabad \", \"Mumbai\"],\n    \"amount\": [\"1200\", \"2400\", \"2400\", \"unknown\", \"-500\", \"900\", \"1500\", \"1800\"],\n    \"order_date\": [\"2026-01-05\", \"2026-01-06\", \"2026-01-06\", \"not-a-date\", \"2026-01-08\", \"2026-01-09\", \"2026-01-10\", \"2026-01-11\"]\n})\n\n# Count duplicate business keys before removing repeated rows.\nduplicate_count = None\n\n# Keep the first order_id and work on a separate copy.\nclean_orders = None\n\n# Standardise text and safely convert numeric/date fields.\nclean_orders[\"city\"] = None\nclean_orders[\"amount\"] = None\nclean_orders[\"order_date\"] = None\n\n# Record data-quality counts before applying the row filter.\ninvalid_amount_count = None\nnegative_amount_count = None\ninvalid_date_count = None\nmissing_city_count = None\n\n# Keep only rows that satisfy the stated validity rules.\nvalid_rows = None\ninvalid_row_count = None\nclean_orders = None\nclean_revenue = None\n\nprint(\"Duplicate IDs:\", duplicate_count)\nprint(\"Rows retained:\", len(clean_orders))\nprint(\"Clean revenue:\", clean_revenue)",
      "hint": "Calculate duplicated(subset=['order_id']).sum() before drop_duplicates. Replace blank city text with np.nan, then strip() and title(). Use to_numeric and to_datetime with errors='coerce'. Build valid_rows from notna() checks plus amount.ge(0), count ~valid_rows, and only then filter.",
      "solution": "import numpy as np\nimport pandas as pd\n\nraw_orders = pd.DataFrame({\n    \"order_id\": [501, 502, 502, 503, 504, 505, 506, 507],\n    \"city\": [\" chennai \", \"PUNE\", \"PUNE\", \"Chennai\", \"Bengaluru\", None, \" Hyderabad \", \"Mumbai\"],\n    \"amount\": [\"1200\", \"2400\", \"2400\", \"unknown\", \"-500\", \"900\", \"1500\", \"1800\"],\n    \"order_date\": [\"2026-01-05\", \"2026-01-06\", \"2026-01-06\", \"not-a-date\", \"2026-01-08\", \"2026-01-09\", \"2026-01-10\", \"2026-01-11\"]\n})\n\nduplicate_count = int(raw_orders.duplicated(subset=[\"order_id\"]).sum())\nclean_orders = raw_orders.drop_duplicates(subset=[\"order_id\"], keep=\"first\").copy()\nclean_orders[\"city\"] = (\n    clean_orders[\"city\"]\n    .replace(r\"^\\s*$\", np.nan, regex=True)\n    .str.strip()\n    .str.title()\n)\nclean_orders[\"amount\"] = pd.to_numeric(clean_orders[\"amount\"], errors=\"coerce\")\nclean_orders[\"order_date\"] = pd.to_datetime(clean_orders[\"order_date\"], errors=\"coerce\")\n\ninvalid_amount_count = int(clean_orders[\"amount\"].isna().sum())\nnegative_amount_count = int(clean_orders[\"amount\"].lt(0).sum())\ninvalid_date_count = int(clean_orders[\"order_date\"].isna().sum())\nmissing_city_count = int(clean_orders[\"city\"].isna().sum())\n\nvalid_rows = (\n    clean_orders[\"city\"].notna()\n    & clean_orders[\"amount\"].notna()\n    & clean_orders[\"amount\"].ge(0)\n    & clean_orders[\"order_date\"].notna()\n)\ninvalid_row_count = int((~valid_rows).sum())\nclean_orders = clean_orders.loc[valid_rows].copy()\nclean_revenue = float(clean_orders[\"amount\"].sum())\n\nprint(\"Duplicate IDs:\", duplicate_count)\nprint(\"Rows retained:\", len(clean_orders))\nprint(\"Clean revenue:\", clean_revenue)",
      "tests": [
        {
          "name": "Counts the repeated order key before deduplication",
          "code": "assert duplicate_count == 1",
          "expected": 1,
          "actual": "duplicate_count",
          "failureMessage": "Count duplicates by the business key, order_id, before removing them."
        },
        {
          "name": "Converts invalid numeric text to a missing value",
          "code": "assert invalid_amount_count == 1",
          "expected": 1,
          "actual": "invalid_amount_count",
          "failureMessage": "The text 'unknown' is not an amount. errors='coerce' should expose it as missing."
        },
        {
          "name": "Counts negative amounts separately from invalid text",
          "code": "assert negative_amount_count == 1",
          "expected": 1,
          "actual": "negative_amount_count",
          "failureMessage": "A negative amount is numeric but fails the non-negative business rule."
        },
        {
          "name": "Counts dates that cannot be parsed",
          "code": "assert invalid_date_count == 1",
          "expected": 1,
          "actual": "invalid_date_count",
          "failureMessage": "Use to_datetime with errors='coerce' so the invalid date becomes missing and can be counted."
        },
        {
          "name": "Counts missing city values after text standardisation",
          "code": "assert missing_city_count == 1",
          "expected": 1,
          "actual": "missing_city_count",
          "failureMessage": "Missing and blank city names must remain missing, not become the literal word 'None' or an empty label."
        },
        {
          "name": "Retains only four valid, unique orders with clean city names",
          "code": "assert len(clean_orders) == 4 and sorted(clean_orders['city'].tolist()) == ['Chennai', 'Hyderabad', 'Mumbai', 'Pune']",
          "expected": [
            4,
            "Chennai",
            "Hyderabad",
            "Mumbai",
            "Pune"
          ],
          "actual": "[len(clean_orders), sorted(clean_orders['city'].tolist())]",
          "failureMessage": "Deduplicate first, then retain only rows with a city, non-negative amount and valid date."
        },
        {
          "name": "Reconciles the retained revenue and confirms no invalid values remain",
          "code": "assert clean_revenue == 6900.0 and clean_orders['amount'].ge(0).all() and clean_orders.notna().all().all()",
          "expected": [
            6900,
            true
          ],
          "actual": "[clean_revenue, bool(clean_orders['amount'].ge(0).all()), bool(clean_orders.notna().all().all())]",
          "failureMessage": "The four retained orders total 6,900 and have no missing fields or negative amounts."
        }
      ]
    }
  },
  {
    "id": "p1-c13",
    "curriculumId": "P1-C13",
    "prerequisites": [
      "p1-c12"
    ],
    "title": "Grouping and business summaries",
    "level": "Intermediate",
    "mins": 70,
    "packages": [
      "numpy",
      "pandas"
    ],
    "plain": "Managers ask questions such as: Which city generated the most revenue? How many orders came from each city? What share of total sales came from Pune? pandas can split a table into groups, calculate several measures for each group and return a compact summary. This is one of the most important daily skills for a data analyst.",
    "definition": "groupby() separates rows into groups based on one or more keys. Aggregation with agg() reduces each group to summary values such as size, sum, mean and nunique. transform() calculates a group-level value but returns it aligned to every original row. filter() keeps or removes whole groups based on a condition. pivot_table() reshapes grouped values into a matrix, while crosstab() creates a frequency table for combinations of categories.",
    "analogy": "Imagine sorting invoices into separate city folders. You can count the invoices and add their values in each folder. The manager may want one summary row per city, while an analyst may also want the city total written beside every original invoice. groupby().agg() makes the summary; transform() brings the group-level figure back to each row.",
    "example": "import pandas as pd\n\norders = pd.DataFrame({\n    \"city\": [\"Chennai\", \"Chennai\", \"Pune\", \"Pune\"],\n    \"amount\": [1200, 1800, 5400, 2400]\n})\n\nsummary = orders.groupby(\"city\", as_index=False).agg(\n    order_count=(\"amount\", \"size\"),\n    revenue=(\"amount\", \"sum\")\n)\n\nprint(summary.to_dict(\"records\"))",
    "expectedOutput": "[{'city': 'Chennai', 'order_count': 2, 'revenue': 3000}, {'city': 'Pune', 'order_count': 2, 'revenue': 7800}]",
    "prediction": "The original orders table has four rows. After grouping by city and calculating one summary row per city, how many rows should summary contain?",
    "predictionAnswer": "Two rows, one for Chennai and one for Pune. A grouped aggregation reduces the original detail rows into one record for each distinct group.",
    "question": "Which operation adds a group total to every original row without reducing the number of rows?",
    "options": [
      "groupby().agg()",
      "groupby().transform()",
      "drop_duplicates()"
    ],
    "answer": 1,
    "why": "transform() returns a result aligned to the original index. agg() summarises each group into fewer rows; transform() keeps the row-level shape.",
    "task": "Build a city summary containing order count, total revenue, average order value and unique customers. Calculate each city's share of total revenue, add the city total back to every order with transform, keep only cities whose total is at least ₹5,000, and build category tables.",
    "hint": "Use groupby('city', as_index=False).agg(...) with named aggregations. Divide each group's revenue by the overall amount sum for its share. Use groupby('city')['amount'].transform('sum') for a row-aligned total, groupby(...).filter(...) for whole groups, and pd.crosstab() for city/status counts.",
    "solution": "import pandas as pd\n\norders = pd.DataFrame({\n    \"order_id\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"city\": [\"Chennai\", \"Chennai\", \"Pune\", \"Pune\", \"Pune\", \"Bengaluru\", \"Bengaluru\", \"Chennai\"],\n    \"customer_id\": [101, 102, 103, 101, 104, 102, 105, 101],\n    \"amount\": [1200, 1800, 5400, 2400, 1600, 3200, 2100, 800],\n    \"month\": [\"2026-01\", \"2026-01\", \"2026-01\", \"2026-02\", \"2026-02\", \"2026-02\", \"2026-02\", \"2026-02\"],\n    \"status\": [\"Paid\", \"Paid\", \"Paid\", \"Paid\", \"Refunded\", \"Paid\", \"Paid\", \"Refunded\"]\n})\n\ncity_summary = orders.groupby(\"city\", as_index=False).agg(\n    order_count=(\"order_id\", \"size\"),\n    revenue=(\"amount\", \"sum\"),\n    average_order=(\"amount\", \"mean\"),\n    unique_customers=(\"customer_id\", \"nunique\")\n)\ncity_summary[\"revenue_share\"] = city_summary[\"revenue\"] / orders[\"amount\"].sum()\ncity_summary = city_summary.sort_values(\"revenue\", ascending=False)\n\norders[\"city_total\"] = orders.groupby(\"city\")[\"amount\"].transform(\"sum\")\nlarge_cities = orders.groupby(\"city\").filter(\n    lambda group: group[\"amount\"].sum() >= 5000\n)\nstatus_counts = pd.crosstab(orders[\"city\"], orders[\"status\"])\nmonthly_city = pd.pivot_table(\n    orders,\n    index=\"city\",\n    columns=\"month\",\n    values=\"amount\",\n    aggfunc=\"sum\",\n    fill_value=0\n)\n\nprint(\"Revenue leader:\", city_summary.iloc[0][\"city\"])\nprint(\"Total revenue:\", float(city_summary[\"revenue\"].sum()))\nprint(\"Large-city rows:\", len(large_cities))",
    "exercise": {
      "title": "Summarise sales performance by city",
      "prompt": "Create one row per city with order_count, revenue, average_order and unique_customers. Add revenue_share as a fraction of total revenue, sort the summary from highest revenue to lowest, use transform to add city_total to every order, filter to cities with at least ₹5,000 total revenue, and create city/status counts plus a city-by-month pivot table.",
      "setup": "",
      "starter": "import pandas as pd\n\norders = pd.DataFrame({\n    \"order_id\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"city\": [\"Chennai\", \"Chennai\", \"Pune\", \"Pune\", \"Pune\", \"Bengaluru\", \"Bengaluru\", \"Chennai\"],\n    \"customer_id\": [101, 102, 103, 101, 104, 102, 105, 101],\n    \"amount\": [1200, 1800, 5400, 2400, 1600, 3200, 2100, 800],\n    \"month\": [\"2026-01\", \"2026-01\", \"2026-01\", \"2026-02\", \"2026-02\", \"2026-02\", \"2026-02\", \"2026-02\"],\n    \"status\": [\"Paid\", \"Paid\", \"Paid\", \"Paid\", \"Refunded\", \"Paid\", \"Paid\", \"Refunded\"]\n})\n\n# Return one summary row per city with four named measures.\ncity_summary = None\n\n# Calculate each city's share and sort the summary.\ncity_summary[\"revenue_share\"] = None\ncity_summary = None\n\n# Add each city's total to every source order.\norders[\"city_total\"] = None\n\n# Keep only groups with revenue >= 5000.\nlarge_cities = None\n\n# Build city by status counts and city by month revenue.\nstatus_counts = None\nmonthly_city = None\n\nprint(\"Revenue leader:\", city_summary.iloc[0][\"city\"])\nprint(\"Total revenue:\", float(city_summary[\"revenue\"].sum()))\nprint(\"Large-city rows:\", len(large_cities))",
      "hint": "Use named aggregation: order_count=('order_id','size'), revenue=('amount','sum'), average_order=('amount','mean'), unique_customers=('customer_id','nunique'). Divide revenue by orders['amount'].sum(). transform('sum') keeps one city total on each row; filter() keeps complete groups. crosstab uses city and status; pivot_table uses city rows, month columns and amount values.",
      "solution": "import pandas as pd\n\norders = pd.DataFrame({\n    \"order_id\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"city\": [\"Chennai\", \"Chennai\", \"Pune\", \"Pune\", \"Pune\", \"Bengaluru\", \"Bengaluru\", \"Chennai\"],\n    \"customer_id\": [101, 102, 103, 101, 104, 102, 105, 101],\n    \"amount\": [1200, 1800, 5400, 2400, 1600, 3200, 2100, 800],\n    \"month\": [\"2026-01\", \"2026-01\", \"2026-01\", \"2026-02\", \"2026-02\", \"2026-02\", \"2026-02\", \"2026-02\"],\n    \"status\": [\"Paid\", \"Paid\", \"Paid\", \"Paid\", \"Refunded\", \"Paid\", \"Paid\", \"Refunded\"]\n})\n\ncity_summary = orders.groupby(\"city\", as_index=False).agg(\n    order_count=(\"order_id\", \"size\"),\n    revenue=(\"amount\", \"sum\"),\n    average_order=(\"amount\", \"mean\"),\n    unique_customers=(\"customer_id\", \"nunique\")\n)\ncity_summary[\"revenue_share\"] = city_summary[\"revenue\"] / orders[\"amount\"].sum()\ncity_summary = city_summary.sort_values(\"revenue\", ascending=False)\n\norders[\"city_total\"] = orders.groupby(\"city\")[\"amount\"].transform(\"sum\")\nlarge_cities = orders.groupby(\"city\").filter(\n    lambda group: group[\"amount\"].sum() >= 5000\n)\nstatus_counts = pd.crosstab(orders[\"city\"], orders[\"status\"])\nmonthly_city = pd.pivot_table(\n    orders,\n    index=\"city\",\n    columns=\"month\",\n    values=\"amount\",\n    aggfunc=\"sum\",\n    fill_value=0\n)\n\nprint(\"Revenue leader:\", city_summary.iloc[0][\"city\"])\nprint(\"Total revenue:\", float(city_summary[\"revenue\"].sum()))\nprint(\"Large-city rows:\", len(large_cities))",
      "tests": [
        {
          "name": "Produces one summary row for each city",
          "code": "assert city_summary['city'].tolist() == ['Pune', 'Bengaluru', 'Chennai']",
          "expected": [
            "Pune",
            "Bengaluru",
            "Chennai"
          ],
          "actual": "city_summary['city'].tolist()",
          "failureMessage": "Group by city and sort the revenue summary in descending order."
        },
        {
          "name": "Calculates order counts and total revenue correctly",
          "code": "assert city_summary.set_index('city')['revenue'].to_dict() == {'Pune': 9400, 'Bengaluru': 5300, 'Chennai': 3800} and city_summary.set_index('city')['order_count'].to_dict() == {'Pune': 3, 'Bengaluru': 2, 'Chennai': 3}",
          "expected": {
            "Pune": 9400,
            "Bengaluru": 5300,
            "Chennai": 3800
          },
          "actual": "city_summary.set_index('city')['revenue'].to_dict()",
          "failureMessage": "Use size for order counts and sum for revenue; do not count distinct customers as orders."
        },
        {
          "name": "Counts unique customers within each city",
          "code": "assert city_summary.set_index('city').loc['Pune', 'unique_customers'] == 3 and city_summary.set_index('city').loc['Chennai', 'unique_customers'] == 2",
          "expected": [
            3,
            2
          ],
          "actual": "[city_summary.set_index('city').loc['Pune', 'unique_customers'], city_summary.set_index('city').loc['Chennai', 'unique_customers']]",
          "failureMessage": "Use nunique on customer_id so a customer with multiple orders is counted once."
        },
        {
          "name": "Calculates revenue share that reconciles to 100 percent",
          "code": "assert abs(float(city_summary['revenue_share'].sum()) - 1.0) < 1e-12",
          "expected": 1,
          "actual": "float(city_summary['revenue_share'].sum())",
          "failureMessage": "Divide every city's revenue by the same total revenue across all orders."
        },
        {
          "name": "Uses transform to preserve every original order row",
          "code": "assert len(orders) == 8 and orders['city_total'].tolist() == [3800, 3800, 9400, 9400, 9400, 5300, 5300, 3800]",
          "expected": [
            8,
            3800,
            3800,
            9400,
            9400,
            9400,
            5300,
            5300,
            3800
          ],
          "actual": "[len(orders), orders['city_total'].tolist()]",
          "failureMessage": "transform should return a group total aligned to each source row, not a shorter grouped table."
        },
        {
          "name": "Filters complete groups using the city revenue threshold",
          "code": "assert len(large_cities) == 5 and set(large_cities['city']) == {'Pune', 'Bengaluru'}",
          "expected": [
            5,
            "Pune",
            "Bengaluru"
          ],
          "actual": "[len(large_cities), sorted(large_cities['city'].unique().tolist())]",
          "failureMessage": "filter() should keep all order rows belonging to a city whose total is at least 5,000."
        },
        {
          "name": "Builds category counts and a city-by-month pivot",
          "code": "assert status_counts.loc['Pune', 'Paid'] == 2 and monthly_city.loc['Pune', '2026-01'] == 5400 and monthly_city.loc['Chennai', '2026-02'] == 800",
          "expected": [
            2,
            5400,
            800
          ],
          "actual": "[status_counts.loc['Pune', 'Paid'], monthly_city.loc['Pune', '2026-01'], monthly_city.loc['Chennai', '2026-02']]",
          "failureMessage": "Use crosstab for category frequencies and pivot_table for numeric values split by city and month."
        }
      ]
    }
  },
  {
    "id": "p1-c14",
    "curriculumId": "P1-C14",
    "prerequisites": [
      "p1-c13"
    ],
    "title": "Joining, reshaping and time-based analysis",
    "level": "Intermediate",
    "mins": 75,
    "packages": [
      "numpy",
      "pandas"
    ],
    "plain": "A real business report often needs more than one table. Orders contain the amount and date, while a customer table tells you the city. You combine them using a shared key, check that the join did not multiply rows, reshape the result for a report and calculate how revenue changes month by month.",
    "definition": "concat() stacks DataFrames while preserving or resetting indexes. merge() combines records using key columns and supports inner, left, right and outer join types. validate checks join-key cardinality, and indicator adds a column showing whether a row matched. pivot_table() turns categories into columns; melt() converts wide columns back into rows. Datetime indexes support resample() for fixed time periods, while rolling() calculates moving-window measures and shift() aligns values from a previous period.",
    "analogy": "Imagine two registers: one has orders and customer IDs; the other has customer IDs and cities. A join looks up the matching city for each order. You count the rows before and after so a repeated customer ID does not accidentally multiply sales. Then you group by month to create a timeline and calculate a moving average.",
    "example": "import pandas as pd\n\norders = pd.DataFrame({\n    \"customer_id\": [1, 2],\n    \"amount\": [1200, 5400]\n})\ncustomers = pd.DataFrame({\n    \"customer_id\": [1, 2],\n    \"city\": [\"Chennai\", \"Pune\"]\n})\n\njoined = orders.merge(customers, on=\"customer_id\", how=\"left\")\nprint(\"Rows after join:\", len(joined))\nprint(\"Cities:\", joined[\"city\"].tolist())",
    "expectedOutput": "Rows after join: 2\nCities: ['Chennai', 'Pune']",
    "prediction": "A customer table accidentally contains two rows for the same customer_id. What might happen when one order for that customer is merged with it?",
    "predictionAnswer": "The order can appear twice because it matches both customer records. The row count and revenue may grow incorrectly. Check key uniqueness and use merge(validate='many_to_one') when each order should match at most one customer row.",
    "question": "Which pandas merge validation is suitable when many orders can belong to one customer, but each customer_id must be unique in the customer table?",
    "options": [
      "one_to_one",
      "many_to_one",
      "many_to_many"
    ],
    "answer": 1,
    "why": "Each order row is on the many side and the customer lookup is on the one side. many_to_one checks that the right-side customer key is unique.",
    "task": "Combine three monthly order batches, join them to the customer lookup with a left join and many-to-one validation, identify unmatched orders, build monthly revenue, calculate a two-month rolling average and previous-month revenue, and create wide and long city-by-month report tables.",
    "hint": "Use pd.concat([...], ignore_index=True) for the three batches. Parse order_date, then merge on customer_id with how='left', validate='many_to_one' and indicator=True. Resample matched orders to month start ('MS'), use rolling(2, min_periods=1) and shift(1), and use pivot_table followed by reset_index().melt(...).",
    "solution": "import pandas as pd\n\njanuary = pd.DataFrame({\n    \"order_id\": [1001, 1002],\n    \"customer_id\": [1, 2],\n    \"order_date\": [\"2026-01-05\", \"2026-01-12\"],\n    \"amount\": [1200, 5400]\n})\nfebruary = pd.DataFrame({\n    \"order_id\": [1003, 1004],\n    \"customer_id\": [1, 3],\n    \"order_date\": [\"2026-02-02\", \"2026-02-10\"],\n    \"amount\": [800, 3200]\n})\nmarch = pd.DataFrame({\n    \"order_id\": [1005, 1006],\n    \"customer_id\": [2, 9],\n    \"order_date\": [\"2026-03-01\", \"2026-03-09\"],\n    \"amount\": [1800, 700]\n})\ncustomers = pd.DataFrame({\n    \"customer_id\": [1, 2, 3],\n    \"city\": [\"Chennai\", \"Pune\", \"Bengaluru\"]\n})\n\norders = pd.concat([january, february, march], ignore_index=True)\norders[\"order_date\"] = pd.to_datetime(orders[\"order_date\"])\njoined = orders.merge(\n    customers,\n    on=\"customer_id\",\n    how=\"left\",\n    validate=\"many_to_one\",\n    indicator=True\n)\nmatched = joined.loc[joined[\"_merge\"].eq(\"both\")].copy()\nunmatched = joined.loc[joined[\"_merge\"].eq(\"left_only\")].copy()\n\nmonthly = (\n    matched.set_index(\"order_date\")[\"amount\"]\n    .resample(\"MS\")\n    .sum()\n    .rename(\"revenue\")\n    .reset_index()\n)\nmonthly[\"two_month_average\"] = monthly[\"revenue\"].rolling(2, min_periods=1).mean()\nmonthly[\"previous_month_revenue\"] = monthly[\"revenue\"].shift(1)\n\nmatched[\"month\"] = matched[\"order_date\"].dt.to_period(\"M\").astype(str)\nwide = matched.pivot_table(\n    index=\"city\",\n    columns=\"month\",\n    values=\"amount\",\n    aggfunc=\"sum\",\n    fill_value=0\n)\nlong = wide.reset_index().melt(\n    id_vars=\"city\",\n    var_name=\"month\",\n    value_name=\"revenue\"\n)\n\nprint(\"Orders combined:\", len(orders))\nprint(\"Unmatched orders:\", len(unmatched))\nprint(\"Monthly revenue:\", monthly[\"revenue\"].tolist())",
    "exercise": {
      "title": "Join customer data and build a monthly revenue report",
      "prompt": "Combine the January, February and March order batches with concat. Parse order_date, left-join the unique customer lookup with validate='many_to_one' and indicator=True, separate matched and unmatched orders, calculate monthly revenue, a two-month rolling average and previous-month revenue, then reshape the matched revenue into wide and long city-by-month tables.",
      "setup": "",
      "starter": "import pandas as pd\n\njanuary = pd.DataFrame({\n    \"order_id\": [1001, 1002],\n    \"customer_id\": [1, 2],\n    \"order_date\": [\"2026-01-05\", \"2026-01-12\"],\n    \"amount\": [1200, 5400]\n})\nfebruary = pd.DataFrame({\n    \"order_id\": [1003, 1004],\n    \"customer_id\": [1, 3],\n    \"order_date\": [\"2026-02-02\", \"2026-02-10\"],\n    \"amount\": [800, 3200]\n})\nmarch = pd.DataFrame({\n    \"order_id\": [1005, 1006],\n    \"customer_id\": [2, 9],\n    \"order_date\": [\"2026-03-01\", \"2026-03-09\"],\n    \"amount\": [1800, 700]\n})\ncustomers = pd.DataFrame({\n    \"customer_id\": [1, 2, 3],\n    \"city\": [\"Chennai\", \"Pune\", \"Bengaluru\"]\n})\n\n# Stack the three monthly files into one table.\norders = None\norders[\"order_date\"] = None\n\n# Keep all orders and check that customer_id is unique on the lookup side.\njoined = None\nmatched = None\nunmatched = None\n\n# Summarise monthly revenue and create time-based comparison columns.\nmonthly = None\nmonthly[\"two_month_average\"] = None\nmonthly[\"previous_month_revenue\"] = None\n\n# Reshape city/month revenue from wide to long form.\nmatched[\"month\"] = None\nwide = None\nlong = None\n\nprint(\"Orders combined:\", len(orders))\nprint(\"Unmatched orders:\", len(unmatched))\nprint(\"Monthly revenue:\", monthly[\"revenue\"].tolist())",
      "hint": "Use concat with ignore_index=True. Convert the dates before resampling. merge must use how='left', validate='many_to_one' and indicator=True. Rows with _merge == 'both' matched; 'left_only' did not. Resample on the date index with 'MS', then add rolling(2, min_periods=1) and shift(1). pivot_table makes the wide table; reset_index().melt() makes the long table.",
      "solution": "import pandas as pd\n\njanuary = pd.DataFrame({\n    \"order_id\": [1001, 1002],\n    \"customer_id\": [1, 2],\n    \"order_date\": [\"2026-01-05\", \"2026-01-12\"],\n    \"amount\": [1200, 5400]\n})\nfebruary = pd.DataFrame({\n    \"order_id\": [1003, 1004],\n    \"customer_id\": [1, 3],\n    \"order_date\": [\"2026-02-02\", \"2026-02-10\"],\n    \"amount\": [800, 3200]\n})\nmarch = pd.DataFrame({\n    \"order_id\": [1005, 1006],\n    \"customer_id\": [2, 9],\n    \"order_date\": [\"2026-03-01\", \"2026-03-09\"],\n    \"amount\": [1800, 700]\n})\ncustomers = pd.DataFrame({\n    \"customer_id\": [1, 2, 3],\n    \"city\": [\"Chennai\", \"Pune\", \"Bengaluru\"]\n})\n\norders = pd.concat([january, february, march], ignore_index=True)\norders[\"order_date\"] = pd.to_datetime(orders[\"order_date\"])\njoined = orders.merge(\n    customers,\n    on=\"customer_id\",\n    how=\"left\",\n    validate=\"many_to_one\",\n    indicator=True\n)\nmatched = joined.loc[joined[\"_merge\"].eq(\"both\")].copy()\nunmatched = joined.loc[joined[\"_merge\"].eq(\"left_only\")].copy()\n\nmonthly = (\n    matched.set_index(\"order_date\")[\"amount\"]\n    .resample(\"MS\")\n    .sum()\n    .rename(\"revenue\")\n    .reset_index()\n)\nmonthly[\"two_month_average\"] = monthly[\"revenue\"].rolling(2, min_periods=1).mean()\nmonthly[\"previous_month_revenue\"] = monthly[\"revenue\"].shift(1)\n\nmatched[\"month\"] = matched[\"order_date\"].dt.to_period(\"M\").astype(str)\nwide = matched.pivot_table(\n    index=\"city\",\n    columns=\"month\",\n    values=\"amount\",\n    aggfunc=\"sum\",\n    fill_value=0\n)\nlong = wide.reset_index().melt(\n    id_vars=\"city\",\n    var_name=\"month\",\n    value_name=\"revenue\"\n)\n\nprint(\"Orders combined:\", len(orders))\nprint(\"Unmatched orders:\", len(unmatched))\nprint(\"Monthly revenue:\", monthly[\"revenue\"].tolist())",
      "tests": [
        {
          "name": "Concatenates the three monthly batches without losing orders",
          "code": "assert len(orders) == 6 and orders['order_id'].tolist() == [1001, 1002, 1003, 1004, 1005, 1006]",
          "expected": [
            6,
            [
              1001,
              1002,
              1003,
              1004,
              1005,
              1006
            ]
          ],
          "actual": "[len(orders), orders['order_id'].tolist()]",
          "failureMessage": "Use concat with ignore_index=True so all six rows are kept in one consistent index."
        },
        {
          "name": "Uses a many-to-one left join without multiplying order rows",
          "code": "assert len(joined) == 6 and joined['city'].notna().sum() == 5",
          "expected": [
            6,
            5
          ],
          "actual": "[len(joined), int(joined['city'].notna().sum())]",
          "failureMessage": "Every order should remain once. The customer lookup must have one row per customer_id."
        },
        {
          "name": "Identifies the unmatched customer order",
          "code": "assert len(unmatched) == 1 and unmatched['order_id'].tolist() == [1006] and unmatched['customer_id'].tolist() == [9]",
          "expected": [
            1,
            [
              1006
            ],
            [
              9
            ]
          ],
          "actual": "[len(unmatched), unmatched['order_id'].tolist(), unmatched['customer_id'].tolist()]",
          "failureMessage": "The March order for customer 9 has no customer lookup row and should be marked left_only."
        },
        {
          "name": "Resamples matched orders to monthly revenue",
          "code": "assert monthly['revenue'].tolist() == [6600, 4000, 1800]",
          "expected": [
            6600,
            4000,
            1800
          ],
          "actual": "monthly['revenue'].tolist()",
          "failureMessage": "Only matched orders enter the city-based report. The unmatched 700 is not included in the monthly customer-linked revenue."
        },
        {
          "name": "Calculates the two-month rolling average",
          "code": "assert monthly['two_month_average'].tolist() == [6600.0, 5300.0, 2900.0]",
          "expected": [
            6600,
            5300,
            2900
          ],
          "actual": "monthly['two_month_average'].tolist()",
          "failureMessage": "Use rolling(window=2, min_periods=1).mean() to average the current and previous month where available."
        },
        {
          "name": "Uses shift to align the prior month's revenue",
          "code": "assert pd.isna(monthly.loc[0, 'previous_month_revenue']) and monthly['previous_month_revenue'].iloc[1:].tolist() == [6600.0, 4000.0]",
          "expected": [
            null,
            6600,
            4000
          ],
          "actual": "[str(monthly.loc[0, 'previous_month_revenue']), monthly['previous_month_revenue'].iloc[1:].tolist()]",
          "failureMessage": "shift(1) moves the previous month's value down by one row; the first month has no prior value."
        },
        {
          "name": "Creates both wide and long city-by-month report shapes",
          "code": "assert wide.shape == (3, 3) and long.shape == (9, 3) and wide.loc['Chennai', '2026-01'] == 1200 and long['revenue'].sum() == 12400",
          "expected": [
            3,
            3,
            9,
            3,
            1200,
            12400
          ],
          "actual": "[list(wide.shape), list(long.shape), wide.loc['Chennai', '2026-01'], int(long['revenue'].sum())]",
          "failureMessage": "The matched order revenue totals 12,400. The unmatched March order must not enter the customer-linked revenue table."
        }
      ]
    }
  },
  {
    "id": "p1-c15",
    "curriculumId": "P1-C15",
    "prerequisites": [
      "p1-c14"
    ],
    "title": "Statistics for working analysts",
    "level": "Intermediate",
    "mins": 80,
    "packages": [
      "numpy",
      "pandas",
      "scipy"
    ],
    "plain": "A report says sales increased after a new campaign. Is the increase large, or could it be ordinary sample variation? Statistics helps an analyst describe the data, quantify uncertainty and choose a fair comparison. It also teaches you when the evidence is not strong enough to make the claim a business decision might tempt you to make.",
    "definition": "Descriptive statistics summarise observed data using counts, rates, central tendency and spread. Inferential statistics use a sample to estimate or test claims about a wider population. The sample standard deviation uses n−1 degrees of freedom; the standard error measures variability of a sample statistic. A confidence interval describes the long-run coverage of an interval procedure. A p-value is the probability, under a specified null model and assumptions, of data at least as extreme as the observed result. Effect size quantifies magnitude. Test choice depends on variable type, study design, independence and assumptions.",
    "analogy": "Imagine tasting one spoonful from a large pot. The spoonful describes what you tasted, but it may not represent the entire pot if you sampled only the top. Taking a fair sample, recording how varied the spoonfuls are and explaining how uncertain your estimate is gives a more responsible picture. A statistical test asks whether the observed difference would be surprising under a specific no-effect assumption; it does not prove why the difference happened.",
    "example": "import numpy as np\nfrom scipy import stats\n\ncontrol = np.array([12, 14, 15, 13, 16, 14, 15, 13])\nvariant = np.array([15, 16, 17, 14, 18, 16, 17, 15])\n\nresult = stats.ttest_ind(variant, control, equal_var=False)\nprint(\"Control mean:\", control.mean())\nprint(\"Variant mean:\", variant.mean())\nprint(\"Welch p-value:\", round(float(result.pvalue), 4))",
    "expectedOutput": "Control mean: 14.0\nVariant mean: 16.0\nWelch p-value: 0.0086",
    "prediction": "The variant average is higher. Does that alone prove the campaign caused the difference?",
    "predictionAnswer": "No. An observed difference may reflect sampling variation, selection bias, confounding or a real effect. A test quantifies compatibility with a specified null model; it does not remove design flaws or establish causation. A fair randomised experiment and a useful effect-size estimate are important.",
    "question": "The same customers have their satisfaction scores measured before and after a change. Which test is designed for the paired measurements?",
    "options": [
      "Independent-samples Welch t-test",
      "Paired t-test",
      "Chi-square test of independence"
    ],
    "answer": 1,
    "why": "The two scores belong to the same customers, so each before value is naturally paired with its after value. A paired t-test analyses the within-customer differences rather than pretending the two sets are independent.",
    "task": "Create a statistics report from the supplied datasets. Summarise a skewed sample and flag IQR outliers; calculate sample standard deviation, standard error and a 95% t confidence interval; compare two independent groups with Welch's t-test and Cohen's d; analyse paired before/after measurements; choose chi-square for conversion counts and one-way ANOVA for three independent groups; calculate a Pearson correlation and two common probabilities. Interpret the results without claiming that correlation or a low p-value proves causation.",
    "hint": "Use Series.describe(), median() and quantile([.25, .75]) for the distribution. Use ddof=1 for sample standard deviation, stats.sem() for standard error and stats.t.interval() for the confidence interval. Welch uses ttest_ind(..., equal_var=False); paired data use ttest_rel(); categorical counts use chi2_contingency(); three independent means use f_oneway(). Calculate Cohen's d using the pooled sample standard deviation. Use pearsonr(), binom.pmf() and norm.cdf() for the remaining questions.",
    "solution": "import numpy as np\nimport pandas as pd\nfrom scipy import stats\n\nobservations = pd.Series([12, 14, 15, 16, 17, 18, 18, 20, 21, 65])\nq1, q3 = observations.quantile([0.25, 0.75])\niqr = q3 - q1\nlower_fence = q1 - 1.5 * iqr\nupper_fence = q3 + 1.5 * iqr\noutliers = observations[(observations < lower_fence) | (observations > upper_fence)]\n\ngroup_a = np.array([12, 14, 15, 13, 16, 14, 15, 13], dtype=float)\ngroup_b = np.array([15, 16, 17, 14, 18, 16, 17, 15], dtype=float)\nmean_b = float(group_b.mean())\nstandard_error_b = float(stats.sem(group_b))\nconfidence_interval_b = stats.t.interval(\n    0.95,\n    df=len(group_b) - 1,\n    loc=mean_b,\n    scale=standard_error_b\n)\n\nwelch_result = stats.ttest_ind(group_b, group_a, equal_var=False)\npooled_sd = np.sqrt(\n    ((len(group_a) - 1) * group_a.var(ddof=1)\n     + (len(group_b) - 1) * group_b.var(ddof=1))\n    / (len(group_a) + len(group_b) - 2)\n)\ncohens_d = float((group_b.mean() - group_a.mean()) / pooled_sd)\n\nbefore = np.array([42, 45, 40, 48, 43, 41, 46, 44], dtype=float)\nafter = np.array([45, 48, 43, 52, 44, 44, 48, 47], dtype=float)\npaired_result = stats.ttest_rel(after, before)\nmean_paired_change = float(np.mean(after - before))\n\nconversion_table = np.array([[30, 70], [42, 58]])\nchi_square_result = stats.chi2_contingency(conversion_table, correction=False)\n\ntraining_groups = [\n    np.array([70, 72, 68, 74, 71], dtype=float),\n    np.array([76, 78, 75, 77, 79], dtype=float),\n    np.array([82, 80, 84, 83, 81], dtype=float)\n]\nanova_result = stats.f_oneway(*training_groups)\n\ncorrelation_result = stats.pearsonr(\n    [10, 12, 14, 16, 18, 20],\n    [18, 19, 23, 24, 28, 29]\n)\nexactly_two_successes = float(stats.binom.pmf(2, n=5, p=0.4))\nnormal_below_70 = float(stats.norm.cdf(70, loc=65, scale=5))\n\nprint(\"Median and IQR:\", observations.median(), iqr)\nprint(\"Flagged outliers:\", outliers.tolist())\nprint(\"95% interval for variant mean:\", [round(float(x), 2) for x in confidence_interval_b])\nprint(\"Welch test significant at 5%:\", bool(welch_result.pvalue < 0.05))\nprint(\"Paired mean change:\", mean_paired_change)\nprint(\"Conversion chi-square p-value:\", round(float(chi_square_result.pvalue), 4))\nprint(\"Three-group ANOVA significant:\", bool(anova_result.pvalue < 0.05))\nprint(\"Pearson correlation:\", round(float(correlation_result.statistic), 3))\nprint(\"P(exactly two successes):\", round(exactly_two_successes, 4))\nprint(\"P(normal value at or below 70):\", round(normal_below_70, 4))",
    "exercise": {
      "title": "Build an evidence-aware statistics report",
      "prompt": "Complete the statistical workflow with the supplied data. Keep descriptive summaries, outlier fences, inferential test results and probability calculations in separate named variables. Use the test that matches each study design. Report the size and uncertainty of an effect and do not treat p < 0.05 as proof of causation.",
      "setup": "",
      "starter": "import numpy as np\nimport pandas as pd\nfrom scipy import stats\n\nobservations = pd.Series([12, 14, 15, 16, 17, 18, 18, 20, 21, 65])\n\n# Descriptive statistics and the 1.5 × IQR outlier rule.\nq1, q3 = None, None\niqr = None\nlower_fence, upper_fence = None, None\noutliers = None\n\ngroup_a = np.array([12, 14, 15, 13, 16, 14, 15, 13], dtype=float)\ngroup_b = np.array([15, 16, 17, 14, 18, 16, 17, 15], dtype=float)\n\n# Estimate the variant mean and a 95% t confidence interval.\nmean_b = None\nstandard_error_b = None\nconfidence_interval_b = None\n\n# Independent samples: Welch's t-test and pooled-SD Cohen's d.\nwelch_result = None\npooled_sd = None\ncohens_d = None\n\n# Paired measurements: compare the same customers before and after.\nbefore = np.array([42, 45, 40, 48, 43, 41, 46, 44], dtype=float)\nafter = np.array([45, 48, 43, 52, 44, 44, 48, 47], dtype=float)\npaired_result = None\nmean_paired_change = None\n\n# Categorical conversion counts: rows are groups, columns are outcomes.\nconversion_table = np.array([[30, 70], [42, 58]])\nchi_square_result = None\n\n# Three independent groups: one-way ANOVA.\ntraining_groups = [\n    np.array([70, 72, 68, 74, 71], dtype=float),\n    np.array([76, 78, 75, 77, 79], dtype=float),\n    np.array([82, 80, 84, 83, 81], dtype=float)\n]\nanova_result = None\n\n# Relationship and probability calculations.\ncorrelation_result = None\nexactly_two_successes = None\nnormal_below_70 = None\n\nprint(\"Median and IQR:\", observations.median(), iqr)\nprint(\"Flagged outliers:\", outliers.tolist())\nprint(\"95% interval for variant mean:\", [round(float(x), 2) for x in confidence_interval_b])\nprint(\"Welch test significant at 5%:\", bool(welch_result.pvalue < 0.05))\nprint(\"Paired mean change:\", mean_paired_change)\nprint(\"Conversion chi-square p-value:\", round(float(chi_square_result.pvalue), 4))\nprint(\"Three-group ANOVA significant:\", bool(anova_result.pvalue < 0.05))\nprint(\"Pearson correlation:\", round(float(correlation_result.statistic), 3))\nprint(\"P(exactly two successes):\", round(exactly_two_successes, 4))\nprint(\"P(normal value at or below 70):\", round(normal_below_70, 4))",
      "hint": "Start with observations.quantile([0.25, 0.75]) and the 1.5 × IQR fences. Use sample variance (ddof=1) for pooled SD. The CI uses stats.t.interval(0.95, df=n-1, loc=mean, scale=stats.sem(sample)). Then choose ttest_ind(equal_var=False), ttest_rel, chi2_contingency and f_oneway for the four different designs. Finish with pearsonr, binom.pmf and norm.cdf.",
      "solution": "import numpy as np\nimport pandas as pd\nfrom scipy import stats\n\nobservations = pd.Series([12, 14, 15, 16, 17, 18, 18, 20, 21, 65])\nq1, q3 = observations.quantile([0.25, 0.75])\niqr = q3 - q1\nlower_fence = q1 - 1.5 * iqr\nupper_fence = q3 + 1.5 * iqr\noutliers = observations[(observations < lower_fence) | (observations > upper_fence)]\n\ngroup_a = np.array([12, 14, 15, 13, 16, 14, 15, 13], dtype=float)\ngroup_b = np.array([15, 16, 17, 14, 18, 16, 17, 15], dtype=float)\nmean_b = float(group_b.mean())\nstandard_error_b = float(stats.sem(group_b))\nconfidence_interval_b = stats.t.interval(\n    0.95,\n    df=len(group_b) - 1,\n    loc=mean_b,\n    scale=standard_error_b\n)\n\nwelch_result = stats.ttest_ind(group_b, group_a, equal_var=False)\npooled_sd = np.sqrt(\n    ((len(group_a) - 1) * group_a.var(ddof=1)\n     + (len(group_b) - 1) * group_b.var(ddof=1))\n    / (len(group_a) + len(group_b) - 2)\n)\ncohens_d = float((group_b.mean() - group_a.mean()) / pooled_sd)\n\nbefore = np.array([42, 45, 40, 48, 43, 41, 46, 44], dtype=float)\nafter = np.array([45, 48, 43, 52, 44, 44, 48, 47], dtype=float)\npaired_result = stats.ttest_rel(after, before)\nmean_paired_change = float(np.mean(after - before))\n\nconversion_table = np.array([[30, 70], [42, 58]])\nchi_square_result = stats.chi2_contingency(conversion_table, correction=False)\n\ntraining_groups = [\n    np.array([70, 72, 68, 74, 71], dtype=float),\n    np.array([76, 78, 75, 77, 79], dtype=float),\n    np.array([82, 80, 84, 83, 81], dtype=float)\n]\nanova_result = stats.f_oneway(*training_groups)\n\ncorrelation_result = stats.pearsonr(\n    [10, 12, 14, 16, 18, 20],\n    [18, 19, 23, 24, 28, 29]\n)\nexactly_two_successes = float(stats.binom.pmf(2, n=5, p=0.4))\nnormal_below_70 = float(stats.norm.cdf(70, loc=65, scale=5))\n\nprint(\"Median and IQR:\", observations.median(), iqr)\nprint(\"Flagged outliers:\", outliers.tolist())\nprint(\"95% interval for variant mean:\", [round(float(x), 2) for x in confidence_interval_b])\nprint(\"Welch test significant at 5%:\", bool(welch_result.pvalue < 0.05))\nprint(\"Paired mean change:\", mean_paired_change)\nprint(\"Conversion chi-square p-value:\", round(float(chi_square_result.pvalue), 4))\nprint(\"Three-group ANOVA significant:\", bool(anova_result.pvalue < 0.05))\nprint(\"Pearson correlation:\", round(float(correlation_result.statistic), 3))\nprint(\"P(exactly two successes):\", round(exactly_two_successes, 4))\nprint(\"P(normal value at or below 70):\", round(normal_below_70, 4))",
      "tests": [
        {
          "name": "Uses quartiles and the IQR rule to identify the extreme observation",
          "code": "assert q1 == 15.25 and q3 == 19.5 and iqr == 4.25 and outliers.tolist() == [65]",
          "expected": [
            15.25,
            19.5,
            4.25,
            [
              65
            ]
          ],
          "actual": "[q1, q3, iqr, outliers.tolist()]",
          "failureMessage": "Use the 25th and 75th percentiles. The 65 value is above the upper 1.5 × IQR fence."
        },
        {
          "name": "Calculates the sample mean and standard error correctly",
          "code": "assert mean_b == 16.0 and np.isclose(standard_error_b, 0.46291004988627565)",
          "expected": [
            16,
            0.46291
          ],
          "actual": "[mean_b, standard_error_b]",
          "failureMessage": "Use the sample standard error, not the population standard deviation or the standard deviation itself."
        },
        {
          "name": "Builds a 95 percent t confidence interval for the variant mean",
          "code": "assert np.allclose(confidence_interval_b, [14.9053916697, 17.0946083303], atol=1e-6)",
          "expected": [
            14.9054,
            17.0946
          ],
          "actual": "[float(confidence_interval_b[0]), float(confidence_interval_b[1])]",
          "failureMessage": "Use the t distribution with n−1 degrees of freedom and standard error as the scale."
        },
        {
          "name": "Uses Welch's independent-samples test and reports effect size",
          "code": "assert welch_result.pvalue < 0.01 and np.isclose(cohens_d, 1.52752523165)",
          "expected": [
            "p < 0.01",
            "Cohen's d ≈ 1.53"
          ],
          "actual": "[float(welch_result.pvalue), cohens_d]",
          "failureMessage": "The groups are independent, and Welch's test does not assume equal population variances. Report the effect size as well as the p-value."
        },
        {
          "name": "Uses a paired t-test for repeated measurements",
          "code": "assert np.isclose(mean_paired_change, 2.75) and paired_result.pvalue < 0.001",
          "expected": [
            2.75,
            "p < 0.001"
          ],
          "actual": "[mean_paired_change, float(paired_result.pvalue)]",
          "failureMessage": "The same customers were measured twice. Test the paired differences instead of treating the two lists as independent."
        },
        {
          "name": "Uses chi-square for the categorical conversion table",
          "code": "assert np.isclose(chi_square_result.pvalue, 0.07709987174354202) and chi_square_result.pvalue > 0.05",
          "expected": [
            0.0771,
            "not below 0.05"
          ],
          "actual": "[float(chi_square_result.pvalue), bool(chi_square_result.pvalue < 0.05)]",
          "failureMessage": "The outcome is categorical. Here the observed conversion difference does not cross the 5% significance threshold; do not call it a proven lift."
        },
        {
          "name": "Uses one-way ANOVA to compare three independent group means",
          "code": "assert anova_result.statistic > 45 and anova_result.pvalue < 0.001",
          "expected": [
            "F > 45",
            "p < 0.001"
          ],
          "actual": "[float(anova_result.statistic), float(anova_result.pvalue)]",
          "failureMessage": "One-way ANOVA compares the means of three independent groups. A significant result says at least one mean differs; it does not identify which pair without follow-up analysis."
        },
        {
          "name": "Calculates correlation without making a causal claim",
          "code": "assert correlation_result.statistic > 0.98 and correlation_result.pvalue < 0.001",
          "expected": [
            "> 0.98",
            "p < 0.001"
          ],
          "actual": "[float(correlation_result.statistic), float(correlation_result.pvalue)]",
          "failureMessage": "Pearson correlation describes linear association. It does not show that marketing spend caused revenue to rise."
        },
        {
          "name": "Calculates binomial and normal-distribution probabilities",
          "code": "assert np.isclose(exactly_two_successes, 0.3456) and np.isclose(normal_below_70, 0.8413447460685429)",
          "expected": [
            0.3456,
            0.8413
          ],
          "actual": "[exactly_two_successes, normal_below_70]",
          "failureMessage": "Use binom.pmf for an exact success count and norm.cdf for the cumulative probability below a value."
        }
      ]
    }
  },
  {
    "id": "p1-c16",
    "curriculumId": "P1-C16",
    "prerequisites": [
      "p1-c15"
    ],
    "title": "Visualisation and analytical communication",
    "level": "Intermediate",
    "mins": 85,
    "packages": [
      "numpy",
      "pandas",
      "matplotlib"
    ],
    "pypiPackages": [
      "seaborn",
      "plotly"
    ],
    "plain": "A chart is not decoration. It is a way to answer a specific question quickly and fairly. A line chart can reveal a trend, a bar chart can compare categories, a box plot can compare distributions, and a scatter plot can show whether two numeric measures move together. Clear labels, sensible scales and an honest explanation help another person understand what the data actually supports.",
    "definition": "Matplotlib provides figure and axes objects for building static charts; Seaborn builds statistical visualisations on top of Matplotlib; Plotly creates interactive figures. Chart selection should follow variable types and the analytical question. Visual integrity requires meaningful scales, units, labels, accessible colour and uncertainty cues. A defensible analytical narrative states the question, method, result, limitation and possible action without converting association into causation.",
    "analogy": "Think of a chart as the signboard outside a shop. It should answer the visitor's question at a glance. A title explains what the picture measures, the axes explain the units, and the legend explains the groups. If the scale starts at a misleading point or a key group is hidden, the signboard gives the wrong impression even when every number is technically present.",
    "example": "import matplotlib.pyplot as plt\nimport pandas as pd\nimport seaborn as sns\nimport plotly.express as px\n\nsales = pd.DataFrame({\n    \"month\": [\"Jan\", \"Feb\", \"Mar\", \"Apr\"],\n    \"revenue\": [120, 150, 135, 180]\n})\n\nfig, ax = plt.subplots()\nax.bar(sales[\"month\"], sales[\"revenue\"])\nax.set(title=\"Monthly revenue\", xlabel=\"Month\", ylabel=\"Revenue (₹ thousands)\")\nax.set_ylim(0, 200)\n\ndistribution = pd.DataFrame({\n    \"campaign\": [\"A\", \"A\", \"A\", \"B\", \"B\", \"B\"],\n    \"conversion\": [2.1, 2.4, 2.0, 2.6, 2.8, 2.7]\n})\nsns.boxplot(data=distribution, x=\"campaign\", y=\"conversion\")\n\ninteractive_figure = px.line(\n    sales, x=\"month\", y=\"revenue\", markers=True,\n    title=\"Monthly revenue trend\"\n)\nprint(\"Bar chart baseline:\", ax.get_ylim()[0])\nprint(\"Interactive points:\", len(interactive_figure.data[0].x))",
    "expectedOutput": "Bar chart baseline: 0.0\nInteractive points: 4",
    "prediction": "A bar chart compares revenue across cities. Why can starting its vertical axis at ₹9,000 instead of zero exaggerate small differences?",
    "predictionAnswer": "The visible bar lengths represent magnitude from the baseline. A truncated zero baseline can make a small difference look enormous. A line chart may use a tighter scale when appropriate, but the axis must be labelled and the choice must not mislead.",
    "question": "A manager wants to compare the distribution and spread of delivery times across four regions. Which chart is a strong first choice?",
    "options": [
      "A box plot",
      "A pie chart",
      "A 3D decorative surface"
    ],
    "answer": 0,
    "why": "A box plot shows median, quartiles, spread and potential outliers for each region, making it useful for distribution comparisons. A pie chart is not designed to show the shape and spread of a numeric variable.",
    "task": "Create a concise sales visualisation pack from the supplied monthly data. Build a Matplotlib bar chart with asymmetric uncertainty intervals, a Seaborn box plot to compare two campaign distributions, and an interactive Plotly line chart. Use meaningful titles, units, labels, a zero baseline for the bars and an annotation. Write an evidence-aware chart story with a question, method, result, limitation and action.",
    "hint": "For the Matplotlib chart, pass asymmetric yerr as [revenue - lower, upper - revenue] and label the y-axis with its units. For Seaborn, use sns.boxplot(data=campaign, x='campaign', y='conversion_rate', ax=box_ax). For Plotly, use px.line(..., markers=True) and update its axis titles. Generate HTML with plotly_figure.to_html(...). Check that every chart has a clear question and avoids a misleading scale.",
    "solution": "import matplotlib.pyplot as plt\nimport pandas as pd\nimport seaborn as sns\nimport plotly.express as px\n\nmonthly = pd.DataFrame({\n    \"month\": [\"Jan\", \"Feb\", \"Mar\", \"Apr\"],\n    \"revenue\": [120, 150, 135, 180],\n    \"lower\": [110, 140, 125, 165],\n    \"upper\": [130, 160, 145, 195]\n})\n\nfig, ax = plt.subplots(figsize=(7, 4))\ny_errors = [\n    monthly[\"revenue\"] - monthly[\"lower\"],\n    monthly[\"upper\"] - monthly[\"revenue\"]\n]\nax.bar(\n    monthly[\"month\"],\n    monthly[\"revenue\"],\n    yerr=y_errors,\n    capsize=4,\n    label=\"Revenue\"\n)\nax.set_title(\"Monthly revenue with uncertainty range\")\nax.set_xlabel(\"Month\")\nax.set_ylabel(\"Revenue (₹ thousands)\")\nax.set_ylim(0, 210)\nax.legend()\nax.annotate(\n    \"Highest observed month\",\n    xy=(\"Apr\", 180),\n    xytext=(\"Mar\", 200),\n    arrowprops={\"arrowstyle\": \"->\"}\n)\nfig.tight_layout()\n\ncampaign = pd.DataFrame({\n    \"campaign\": [\"A\"] * 5 + [\"B\"] * 5,\n    \"conversion_rate\": [2.1, 2.4, 2.0, 2.3, 2.2, 2.6, 2.8, 2.7, 2.5, 2.9]\n})\nbox_fig, box_ax = plt.subplots(figsize=(6, 4))\nsns.boxplot(data=campaign, x=\"campaign\", y=\"conversion_rate\", ax=box_ax)\nbox_ax.set_title(\"Conversion-rate distribution by campaign\")\nbox_ax.set_xlabel(\"Campaign\")\nbox_ax.set_ylabel(\"Conversion rate (%)\")\nbox_fig.tight_layout()\n\nplotly_figure = px.line(\n    monthly,\n    x=\"month\",\n    y=\"revenue\",\n    markers=True,\n    title=\"Interactive monthly revenue trend\"\n)\nplotly_figure.update_layout(\n    xaxis_title=\"Month\",\n    yaxis_title=\"Revenue (₹ thousands)\"\n)\nplotly_html = plotly_figure.to_html(full_html=True, include_plotlyjs=\"cdn\")\n\nchart_story = {\n    \"question\": \"How did monthly revenue change from January to April?\",\n    \"method\": \"Compare monthly totals with a labelled bar chart and show the supplied lower and upper uncertainty bounds.\",\n    \"result\": \"April has the highest observed revenue at ₹180 thousand.\",\n    \"limitation\": \"Four monthly totals do not establish a seasonal pattern or explain why revenue changed.\",\n    \"action\": \"Check the underlying order mix and campaign calendar before attributing the increase to a cause.\"\n}\n\nprint(\"Matplotlib bar baseline:\", ax.get_ylim()[0])\nprint(\"Uncertainty ranges:\", len(ax.collections))\nprint(\"Seaborn distributions:\", campaign[\"campaign\"].nunique())\nprint(\"Plotly points:\", len(plotly_figure.data[0].x))\nprint(\"Chart story fields:\", len(chart_story))",
    "exercise": {
      "title": "Build and explain a three-chart sales visualisation pack",
      "prompt": "Use the monthly table to build a labelled Matplotlib bar chart with asymmetric lower/upper uncertainty intervals and an annotated highest month. Create a Seaborn box plot comparing campaigns A and B. Create a Plotly line chart with markers and labelled axes, then convert it to standalone HTML. Finish with a five-part chart story. Do not imply that the visual trend proves a cause.",
      "setup": "",
      "starter": "import matplotlib.pyplot as plt\nimport pandas as pd\nimport seaborn as sns\nimport plotly.express as px\n\nmonthly = pd.DataFrame({\n    \"month\": [\"Jan\", \"Feb\", \"Mar\", \"Apr\"],\n    \"revenue\": [120, 150, 135, 180],\n    \"lower\": [110, 140, 125, 165],\n    \"upper\": [130, 160, 145, 195]\n})\n\n# Matplotlib: use the lower and upper columns as asymmetric error bars.\nfig, ax = plt.subplots(figsize=(7, 4))\ny_errors = None\nbars = None\n# Add title, axis labels with units, zero baseline, legend and annotation.\n\ncampaign = pd.DataFrame({\n    \"campaign\": [\"A\"] * 5 + [\"B\"] * 5,\n    \"conversion_rate\": [2.1, 2.4, 2.0, 2.3, 2.2, 2.6, 2.8, 2.7, 2.5, 2.9]\n})\n\n# Seaborn: compare the distribution of conversion_rate by campaign.\nbox_fig, box_ax = plt.subplots(figsize=(6, 4))\n# Create and label the box plot.\n\n# Plotly: create a marker-enabled monthly line chart with axis titles.\nplotly_figure = None\nplotly_html = None\n\n# Tell the reader the question, method, result, limitation and action.\nchart_story = {\n    \"question\": \"\",\n    \"method\": \"\",\n    \"result\": \"\",\n    \"limitation\": \"\",\n    \"action\": \"\"\n}\n\nprint(\"Matplotlib bar baseline:\", ax.get_ylim()[0])\nprint(\"Uncertainty ranges:\", len(ax.collections))\nprint(\"Seaborn distributions:\", campaign[\"campaign\"].nunique())\nprint(\"Plotly points:\", len(plotly_figure.data[0].x))\nprint(\"Chart story fields:\", len(chart_story))",
      "hint": "Build y_errors with two rows: monthly['revenue'] - monthly['lower'], then monthly['upper'] - monthly['revenue']. Pass this to bar(..., yerr=y_errors, capsize=4). Label both axes and include units. Use sns.boxplot() for the two distributions. Use px.line(..., markers=True), update_layout() for axis titles and to_html() for the interactive chart. Fill each chart_story value with a specific and appropriately cautious statement.",
      "solution": "import matplotlib.pyplot as plt\nimport pandas as pd\nimport seaborn as sns\nimport plotly.express as px\n\nmonthly = pd.DataFrame({\n    \"month\": [\"Jan\", \"Feb\", \"Mar\", \"Apr\"],\n    \"revenue\": [120, 150, 135, 180],\n    \"lower\": [110, 140, 125, 165],\n    \"upper\": [130, 160, 145, 195]\n})\n\nfig, ax = plt.subplots(figsize=(7, 4))\ny_errors = [\n    monthly[\"revenue\"] - monthly[\"lower\"],\n    monthly[\"upper\"] - monthly[\"revenue\"]\n]\nbars = ax.bar(\n    monthly[\"month\"],\n    monthly[\"revenue\"],\n    yerr=y_errors,\n    capsize=4,\n    label=\"Revenue\"\n)\nax.set_title(\"Monthly revenue with uncertainty range\")\nax.set_xlabel(\"Month\")\nax.set_ylabel(\"Revenue (₹ thousands)\")\nax.set_ylim(0, 210)\nax.legend()\nax.annotate(\n    \"Highest observed month\",\n    xy=(\"Apr\", 180),\n    xytext=(\"Mar\", 200),\n    arrowprops={\"arrowstyle\": \"->\"}\n)\nfig.tight_layout()\n\ncampaign = pd.DataFrame({\n    \"campaign\": [\"A\"] * 5 + [\"B\"] * 5,\n    \"conversion_rate\": [2.1, 2.4, 2.0, 2.3, 2.2, 2.6, 2.8, 2.7, 2.5, 2.9]\n})\nbox_fig, box_ax = plt.subplots(figsize=(6, 4))\nsns.boxplot(data=campaign, x=\"campaign\", y=\"conversion_rate\", ax=box_ax)\nbox_ax.set_title(\"Conversion-rate distribution by campaign\")\nbox_ax.set_xlabel(\"Campaign\")\nbox_ax.set_ylabel(\"Conversion rate (%)\")\nbox_fig.tight_layout()\n\nplotly_figure = px.line(\n    monthly,\n    x=\"month\",\n    y=\"revenue\",\n    markers=True,\n    title=\"Interactive monthly revenue trend\"\n)\nplotly_figure.update_layout(\n    xaxis_title=\"Month\",\n    yaxis_title=\"Revenue (₹ thousands)\"\n)\nplotly_html = plotly_figure.to_html(full_html=True, include_plotlyjs=\"cdn\")\n\nchart_story = {\n    \"question\": \"How did monthly revenue change from January to April?\",\n    \"method\": \"Compare monthly totals with a labelled bar chart and show the supplied lower and upper uncertainty bounds.\",\n    \"result\": \"April has the highest observed revenue at ₹180 thousand.\",\n    \"limitation\": \"Four monthly totals do not establish a seasonal pattern or explain why revenue changed.\",\n    \"action\": \"Check the underlying order mix and campaign calendar before attributing the increase to a cause.\"\n}\n\nprint(\"Matplotlib bar baseline:\", ax.get_ylim()[0])\nprint(\"Uncertainty ranges:\", len(ax.collections))\nprint(\"Seaborn distributions:\", campaign[\"campaign\"].nunique())\nprint(\"Plotly points:\", len(plotly_figure.data[0].x))\nprint(\"Chart story fields:\", len(chart_story))",
      "tests": [
        {
          "name": "Builds a labelled Matplotlib figure and axes",
          "code": "assert ax.get_title() == 'Monthly revenue with uncertainty range' and ax.get_xlabel() == 'Month' and ax.get_ylabel() == 'Revenue (₹ thousands)' and ax.get_legend() is not None",
          "expected": [
            "title",
            "Month",
            "Revenue (₹ thousands)",
            "legend"
          ],
          "actual": "[ax.get_title(), ax.get_xlabel(), ax.get_ylabel(), ax.get_legend() is not None]",
          "failureMessage": "Give the reader the chart question, category and measure with units, and explain the bar series in a legend."
        },
        {
          "name": "Keeps the bar-chart baseline at zero",
          "code": "assert ax.get_ylim()[0] == 0",
          "expected": 0,
          "actual": "ax.get_ylim()[0]",
          "failureMessage": "A magnitude comparison using bars should normally start at zero so the visual lengths do not exaggerate differences."
        },
        {
          "name": "Displays the asymmetric uncertainty intervals and annotation",
          "code": "assert len(ax.containers) >= 1 and len(ax.collections) >= 1 and len(ax.texts) >= 1",
          "expected": [
            true,
            true,
            true
          ],
          "actual": "[len(ax.containers) >= 1, len(ax.collections) >= 1, len(ax.texts) >= 1]",
          "failureMessage": "Pass the lower and upper deviations as asymmetric yerr and annotate the highest month."
        },
        {
          "name": "Creates a Seaborn distribution comparison with axis labels",
          "code": "assert box_ax.get_title() == 'Conversion-rate distribution by campaign' and box_ax.get_xlabel() == 'Campaign' and box_ax.get_ylabel() == 'Conversion rate (%)' and len(box_ax.lines) > 0",
          "expected": [
            "title",
            "Campaign",
            "Conversion rate (%)",
            "box plot"
          ],
          "actual": "[box_ax.get_title(), box_ax.get_xlabel(), box_ax.get_ylabel(), len(box_ax.lines)]",
          "failureMessage": "Use Seaborn's boxplot for the campaign distributions and label the percentage measure."
        },
        {
          "name": "Creates an interactive Plotly line chart with four data points",
          "code": "assert plotly_figure.data[0].type == 'scatter' and 'markers' in plotly_figure.data[0].mode and len(plotly_figure.data[0].x) == 4",
          "expected": [
            "scatter",
            "markers",
            4
          ],
          "actual": "[plotly_figure.data[0].type, plotly_figure.data[0].mode, len(plotly_figure.data[0].x)]",
          "failureMessage": "Use px.line with markers=True so each monthly observation can be inspected."
        },
        {
          "name": "Exports the interactive Plotly figure as HTML",
          "code": "assert 'plotly-graph-div' in plotly_html and 'Interactive monthly revenue trend' in plotly_html",
          "expected": [
            "plotly-graph-div",
            "Monthly revenue"
          ],
          "actual": "['plotly-graph-div' in plotly_html, 'Interactive monthly revenue trend' in plotly_html]",
          "failureMessage": "to_html should produce a reusable HTML representation of the interactive chart."
        },
        {
          "name": "Provides the full analytical communication structure",
          "code": "assert set(chart_story) == {'question', 'method', 'result', 'limitation', 'action'} and all(len(value.strip()) > 20 for value in chart_story.values())",
          "expected": [
            "question",
            "method",
            "result",
            "limitation",
            "action"
          ],
          "actual": "sorted(chart_story.keys())",
          "failureMessage": "A useful chart explanation states the question, method, finding, limitation and responsible next action."
        },
        {
          "name": "States the observed result without claiming causation",
          "code": "assert 'April' in chart_story['result'] and ('not establish' in chart_story['limitation'] or 'does not establish' in chart_story['limitation']) and 'before attributing' in chart_story['action']",
          "expected": [
            "April result",
            "cautious limitation",
            "evidence-based action"
          ],
          "actual": "[chart_story['result'], chart_story['limitation'], chart_story['action']]",
          "failureMessage": "Do not infer seasonality or campaign causation from just four monthly totals."
        }
      ]
    }
  },
  {
    "id": "p1-c17",
    "curriculumId": "P1-C17",
    "prerequisites": [
      "p1-c16"
    ],
    "title": "APIs and external data collection",
    "level": "Intermediate",
    "mins": 90,
    "plain": "Analysts often need information that is not already in a spreadsheet: exchange rates, public statistics, product catalogues or order records held by another system. An API gives software a documented way to ask for that information. The important skill is not just sending a request. You must check whether it worked, confirm the returned data has the shape you expected, handle temporary failures, respect pagination and protect credentials.",
    "definition": "An Application Programming Interface (API) is a defined contract through which one software system exposes capabilities or data to another. In HTTP, a client sends a request to a resource URL and receives a response containing a status code, headers and possibly a body. A GET request retrieves a representation; query parameters refine the request. JSON (JavaScript Object Notation) is a common structured response format. Pagination divides a large result set into multiple bounded requests. A timeout limits how long the client waits; a retry policy repeats only selected transient failures within a finite attempt budget.",
    "analogy": "Imagine requesting files from a records office. The URL is the office address, query parameters describe which records you need, and the response is the envelope you receive. A status code is the clerk's reply: 200 means the request was accepted, 404 means the requested record was not found, 429 means you are asking too often, and 5xx means the service is having a problem. Pagination is receiving the records in numbered bundles. Your access card is a credential: you keep it private and never print it on the envelope.",
    "setupGuide": "This lesson uses an injected fake transport with fixed responses. No network access, API account or credential is needed. Real browser requests may be blocked by Cross-Origin Resource Sharing (CORS), a browser security rule controlled by the API server. In a production application, use the service's documented client policy or a trusted backend; do not put a private server credential in browser JavaScript. The exercise models the request/response contract so it can be tested offline.",
    "example": "import json\nfrom pathlib import Path\nfrom urllib.parse import urlencode, urlsplit, parse_qs\n\nclass DemoResponse:\n    def __init__(self, status_code, payload):\n        self.status_code = status_code\n        self.body = payload if isinstance(payload, str) else json.dumps(payload)\n    def json(self):\n        return json.loads(self.body)\n\ndef build_url(base_url, params):\n    query = urlencode(params)\n    return f\"{base_url}?{query}\" if query else base_url\n\ndef request_json(url, transport, max_attempts=3, timeout=5, wait=None):\n    if max_attempts < 1:\n        raise ValueError(\"max_attempts must be at least 1\")\n    if timeout <= 0:\n        raise ValueError(\"timeout must be positive\")\n    wait = wait or (lambda seconds: None)\n    for attempt in range(max_attempts):\n        try:\n            response = transport(url, timeout=timeout)\n        except TimeoutError:\n            if attempt + 1 == max_attempts:\n                raise\n            wait(min(2 ** attempt, 4))\n            continue\n        status = response.status_code\n        if status == 429 or status >= 500:\n            if attempt + 1 == max_attempts:\n                raise RuntimeError(f\"Request failed after {max_attempts} attempts: HTTP {status}\")\n            wait(min(2 ** attempt, 4))\n            continue\n        if status >= 400:\n            raise ValueError(f\"Request was rejected: HTTP {status}\")\n        payload = response.json()\n        if not isinstance(payload, dict) or not isinstance(payload.get(\"results\"), list):\n            raise ValueError(\"The API response must contain a results list\")\n        return payload\n    raise RuntimeError(\"Request attempts were exhausted\")\n\ndef collect_pages(base_url, params, transport, max_pages=5, wait=None):\n    if max_pages < 1:\n        raise ValueError(\"max_pages must be at least 1\")\n    collected = []\n    for page_number in range(1, max_pages + 1):\n        page_params = dict(params)\n        page_params[\"page\"] = page_number\n        payload = request_json(build_url(base_url, page_params), transport, wait=wait)\n        collected.extend(payload[\"results\"])\n        if payload.get(\"next_page\") is None:\n            return collected\n    raise RuntimeError(f\"Pagination exceeded the safety limit of {max_pages} pages\")\n\ndef authentication_headers(environment):\n    token = environment.get(\"ANALYTICS_API_TOKEN\")\n    return {\"Authorization\": f\"Bearer {token}\"} if token else {}\n\ndef save_records(records, destination):\n    destination = Path(destination)\n    destination.parent.mkdir(parents=True, exist_ok=True)\n    destination.write_text(json.dumps(records, sort_keys=True, indent=2), encoding=\"utf-8\")\n    return destination\n\nresponses = {\n    1: DemoResponse(200, {\"results\": [{\"id\": 101, \"amount\": 120}, {\"id\": 102, \"amount\": 80}], \"next_page\": 2}),\n    2: DemoResponse(200, {\"results\": [{\"id\": 103, \"amount\": 150}], \"next_page\": None})\n}\nattempts = {1: 0, 2: 0}\nretry_delays = []\ndef fake_get(url, timeout):\n    page = int(parse_qs(urlsplit(url).query)[\"page\"][0])\n    attempts[page] += 1\n    if page == 1 and attempts[page] == 1:\n        return DemoResponse(503, {})\n    return responses[page]\n\nfirst_url = build_url(\"https://data.example.test/orders\", {\"status\": \"paid\", \"limit\": 2})\norders = collect_pages(\"https://data.example.test/orders\", {\"status\": \"paid\", \"limit\": 2}, fake_get, max_pages=4, wait=retry_delays.append)\nsaved_path = save_records(orders, Path(\"data/orders.json\"))\nheaders = authentication_headers({\"ANALYTICS_API_TOKEN\": \"demo-token-not-for-production\"})\nprint(\"Request URL:\", first_url)\nprint(\"Loaded pages:\", len(attempts))\nprint(\"Order IDs:\", [order[\"id\"] for order in orders])\nprint(\"Retry attempts:\", attempts[1])\nprint(\"Retry delays:\", retry_delays)\nprint(\"Saved records:\", len(json.loads(saved_path.read_text(encoding=\"utf-8\"))))\nprint(\"Authentication configured:\", \"Authorization\" in headers)",
    "expectedOutput": "Request URL: https://data.example.test/orders?status=paid&limit=2\nLoaded pages: 2\nOrder IDs: [101, 102, 103]\nRetry attempts: 2\nRetry delays: [1]\nSaved records: 3\nAuthentication configured: True",
    "prediction": "The service returns HTTP 503 on the first attempt, then HTTP 200. With a maximum of three attempts, a five-second timeout and a bounded retry policy, how many transport calls happen before the data is returned?",
    "predictionAnswer": "Two calls. The first 503 is a server-side failure that may be transient, so the client waits for the bounded retry delay and tries once more. The second response is 200 and contains the expected JSON list. A 404 is different: repeating the same invalid request is not a useful recovery strategy.",
    "question": "Which response should normally be considered a transient retry candidate when the same request is otherwise valid?",
    "options": [
      "HTTP 404 — the resource does not exist",
      "HTTP 503 — the service is temporarily unavailable",
      "HTTP 401 — the credentials are not accepted"
    ],
    "answer": 1,
    "why": "A 503 is a server-side failure that may clear without changing the request. A 404 usually requires correcting the resource path, and a 401 requires correcting authentication. Retries must still be finite and respectful of rate limits.",
    "task": "Build a deterministic data collector that encodes query parameters, passes a timeout to an injected transport, validates status and JSON shape, retries bounded transient failures, gathers pages until the API signals the end, stores collected data reproducibly, and reads an optional token from environment configuration. Use only supplied fake responses.",
    "hint": "Use urlencode() rather than manual URL concatenation. Parse response JSON, validate the results list, retry only timeout/429/5xx failures within max_attempts, and reject permanent 4xx responses. In pagination, stop at next_page=None and enforce max_pages. Save UTF-8 JSON with sorted keys; never print a token.",
    "solution": "import json\nfrom pathlib import Path\nfrom urllib.parse import urlencode, urlsplit, parse_qs\n\nclass DemoResponse:\n    def __init__(self, status_code, payload):\n        self.status_code = status_code\n        self.body = payload if isinstance(payload, str) else json.dumps(payload)\n    def json(self):\n        return json.loads(self.body)\n\ndef build_url(base_url, params):\n    query = urlencode(params)\n    return f\"{base_url}?{query}\" if query else base_url\n\ndef request_json(url, transport, max_attempts=3, timeout=5, wait=None):\n    if max_attempts < 1:\n        raise ValueError(\"max_attempts must be at least 1\")\n    if timeout <= 0:\n        raise ValueError(\"timeout must be positive\")\n    wait = wait or (lambda seconds: None)\n    for attempt in range(max_attempts):\n        try:\n            response = transport(url, timeout=timeout)\n        except TimeoutError:\n            if attempt + 1 == max_attempts:\n                raise\n            wait(min(2 ** attempt, 4))\n            continue\n        status = response.status_code\n        if status == 429 or status >= 500:\n            if attempt + 1 == max_attempts:\n                raise RuntimeError(f\"Request failed after {max_attempts} attempts: HTTP {status}\")\n            wait(min(2 ** attempt, 4))\n            continue\n        if status >= 400:\n            raise ValueError(f\"Request was rejected: HTTP {status}\")\n        payload = response.json()\n        if not isinstance(payload, dict) or not isinstance(payload.get(\"results\"), list):\n            raise ValueError(\"The API response must contain a results list\")\n        return payload\n    raise RuntimeError(\"Request attempts were exhausted\")\n\ndef collect_pages(base_url, params, transport, max_pages=5, wait=None):\n    if max_pages < 1:\n        raise ValueError(\"max_pages must be at least 1\")\n    collected = []\n    for page_number in range(1, max_pages + 1):\n        page_params = dict(params)\n        page_params[\"page\"] = page_number\n        payload = request_json(build_url(base_url, page_params), transport, wait=wait)\n        collected.extend(payload[\"results\"])\n        if payload.get(\"next_page\") is None:\n            return collected\n    raise RuntimeError(f\"Pagination exceeded the safety limit of {max_pages} pages\")\n\ndef authentication_headers(environment):\n    token = environment.get(\"ANALYTICS_API_TOKEN\")\n    return {\"Authorization\": f\"Bearer {token}\"} if token else {}\n\ndef save_records(records, destination):\n    destination = Path(destination)\n    destination.parent.mkdir(parents=True, exist_ok=True)\n    destination.write_text(json.dumps(records, sort_keys=True, indent=2), encoding=\"utf-8\")\n    return destination\n\nresponses = {\n    1: DemoResponse(200, {\"results\": [{\"id\": 101, \"amount\": 120}, {\"id\": 102, \"amount\": 80}], \"next_page\": 2}),\n    2: DemoResponse(200, {\"results\": [{\"id\": 103, \"amount\": 150}], \"next_page\": None})\n}\nattempts = {1: 0, 2: 0}\nretry_delays = []\ndef fake_get(url, timeout):\n    page = int(parse_qs(urlsplit(url).query)[\"page\"][0])\n    attempts[page] += 1\n    if page == 1 and attempts[page] == 1:\n        return DemoResponse(503, {})\n    return responses[page]\n\nfirst_url = build_url(\"https://data.example.test/orders\", {\"status\": \"paid\", \"limit\": 2})\norders = collect_pages(\"https://data.example.test/orders\", {\"status\": \"paid\", \"limit\": 2}, fake_get, max_pages=4, wait=retry_delays.append)\nsaved_path = save_records(orders, Path(\"data/orders.json\"))\nheaders = authentication_headers({\"ANALYTICS_API_TOKEN\": \"demo-token-not-for-production\"})\nprint(\"Request URL:\", first_url)\nprint(\"Loaded pages:\", len(attempts))\nprint(\"Order IDs:\", [order[\"id\"] for order in orders])\nprint(\"Retry attempts:\", attempts[1])\nprint(\"Retry delays:\", retry_delays)\nprint(\"Saved records:\", len(json.loads(saved_path.read_text(encoding=\"utf-8\"))))\nprint(\"Authentication configured:\", \"Authorization\" in headers)",
    "packages": [],
    "exercise": {
      "title": "Create a resilient, testable API collector",
      "prompt": "Complete the API client so the supplied fake transport returns all three paid orders. Demonstrate query encoding, finite timeouts, status/JSON validation, bounded retries/backoff, pagination, reproducible JSON storage and optional environment-variable authentication. Do not make a real network call.",
      "setup": "",
      "starter": "import json\nfrom pathlib import Path\nfrom urllib.parse import urlencode, urlsplit, parse_qs\nclass DemoResponse:\n    def __init__(self, status_code, payload):\n        self.status_code = status_code\n        self.body = payload if isinstance(payload, str) else json.dumps(payload)\n    def json(self):\n        return json.loads(self.body)\ndef build_url(base_url, params):\n    # TODO: encode dictionary values as URL query parameters.\n    return base_url\ndef request_json(url, transport, max_attempts=3, timeout=5, wait=None):\n    # TODO: validate settings, status and JSON shape; retry only bounded transient failures.\n    return {\"results\": []}\ndef collect_pages(base_url, params, transport, max_pages=5, wait=None):\n    # TODO: request numbered pages and stop when next_page is None.\n    return []\ndef authentication_headers(environment):\n    # TODO: read an optional token from environment configuration without printing it.\n    return {}\ndef save_records(records, destination):\n    # TODO: save sorted, indented UTF-8 JSON in a reproducible location.\n    return Path(destination)\nresponses = {\n    1: DemoResponse(200, {\"results\": [{\"id\": 101}, {\"id\": 102}], \"next_page\": 2}),\n    2: DemoResponse(200, {\"results\": [{\"id\": 103}], \"next_page\": None})\n}\nattempts = {1: 0, 2: 0}\nretry_delays = []\ndef fake_get(url, timeout):\n    page = int(parse_qs(urlsplit(url).query)[\"page\"][0])\n    attempts[page] += 1\n    if page == 1 and attempts[page] == 1:\n        return DemoResponse(503, {})\n    return responses[page]\nprint(\"API exercise ready for your implementation.\")",
      "hint": "Use urlencode() and json.loads(). Retry only timeout, 429 and 5xx responses, with a strict maximum attempt count. Reject permanent 4xx responses. Validate results is a list, stop pagination at next_page=None, enforce max_pages and save sorted UTF-8 JSON.",
      "solution": "import json\nfrom pathlib import Path\nfrom urllib.parse import urlencode, urlsplit, parse_qs\n\nclass DemoResponse:\n    def __init__(self, status_code, payload):\n        self.status_code = status_code\n        self.body = payload if isinstance(payload, str) else json.dumps(payload)\n    def json(self):\n        return json.loads(self.body)\n\ndef build_url(base_url, params):\n    query = urlencode(params)\n    return f\"{base_url}?{query}\" if query else base_url\n\ndef request_json(url, transport, max_attempts=3, timeout=5, wait=None):\n    if max_attempts < 1:\n        raise ValueError(\"max_attempts must be at least 1\")\n    if timeout <= 0:\n        raise ValueError(\"timeout must be positive\")\n    wait = wait or (lambda seconds: None)\n    for attempt in range(max_attempts):\n        try:\n            response = transport(url, timeout=timeout)\n        except TimeoutError:\n            if attempt + 1 == max_attempts:\n                raise\n            wait(min(2 ** attempt, 4))\n            continue\n        status = response.status_code\n        if status == 429 or status >= 500:\n            if attempt + 1 == max_attempts:\n                raise RuntimeError(f\"Request failed after {max_attempts} attempts: HTTP {status}\")\n            wait(min(2 ** attempt, 4))\n            continue\n        if status >= 400:\n            raise ValueError(f\"Request was rejected: HTTP {status}\")\n        payload = response.json()\n        if not isinstance(payload, dict) or not isinstance(payload.get(\"results\"), list):\n            raise ValueError(\"The API response must contain a results list\")\n        return payload\n    raise RuntimeError(\"Request attempts were exhausted\")\n\ndef collect_pages(base_url, params, transport, max_pages=5, wait=None):\n    if max_pages < 1:\n        raise ValueError(\"max_pages must be at least 1\")\n    collected = []\n    for page_number in range(1, max_pages + 1):\n        page_params = dict(params)\n        page_params[\"page\"] = page_number\n        payload = request_json(build_url(base_url, page_params), transport, wait=wait)\n        collected.extend(payload[\"results\"])\n        if payload.get(\"next_page\") is None:\n            return collected\n    raise RuntimeError(f\"Pagination exceeded the safety limit of {max_pages} pages\")\n\ndef authentication_headers(environment):\n    token = environment.get(\"ANALYTICS_API_TOKEN\")\n    return {\"Authorization\": f\"Bearer {token}\"} if token else {}\n\ndef save_records(records, destination):\n    destination = Path(destination)\n    destination.parent.mkdir(parents=True, exist_ok=True)\n    destination.write_text(json.dumps(records, sort_keys=True, indent=2), encoding=\"utf-8\")\n    return destination\n\nresponses = {\n    1: DemoResponse(200, {\"results\": [{\"id\": 101, \"amount\": 120}, {\"id\": 102, \"amount\": 80}], \"next_page\": 2}),\n    2: DemoResponse(200, {\"results\": [{\"id\": 103, \"amount\": 150}], \"next_page\": None})\n}\nattempts = {1: 0, 2: 0}\nretry_delays = []\ndef fake_get(url, timeout):\n    page = int(parse_qs(urlsplit(url).query)[\"page\"][0])\n    attempts[page] += 1\n    if page == 1 and attempts[page] == 1:\n        return DemoResponse(503, {})\n    return responses[page]\n\nfirst_url = build_url(\"https://data.example.test/orders\", {\"status\": \"paid\", \"limit\": 2})\norders = collect_pages(\"https://data.example.test/orders\", {\"status\": \"paid\", \"limit\": 2}, fake_get, max_pages=4, wait=retry_delays.append)\nsaved_path = save_records(orders, Path(\"data/orders.json\"))\nheaders = authentication_headers({\"ANALYTICS_API_TOKEN\": \"demo-token-not-for-production\"})\nprint(\"Request URL:\", first_url)\nprint(\"Loaded pages:\", len(attempts))\nprint(\"Order IDs:\", [order[\"id\"] for order in orders])\nprint(\"Retry attempts:\", attempts[1])\nprint(\"Retry delays:\", retry_delays)\nprint(\"Saved records:\", len(json.loads(saved_path.read_text(encoding=\"utf-8\"))))\nprint(\"Authentication configured:\", \"Authorization\" in headers)",
      "tests": [
        {
          "name": "Encodes GET query parameters safely",
          "code": "assert build_url(\"https://data.example.test/orders\", {\"status\":\"paid\",\"limit\":2}) == \"https://data.example.test/orders?status=paid&limit=2\"",
          "expected": "status=paid&limit=2",
          "actual": "build_url(\"https://data.example.test/orders\", {\"status\":\"paid\",\"limit\":2})",
          "failureMessage": "Use urllib.parse.urlencode so parameters are encoded safely instead of manually concatenated."
        },
        {
          "name": "Passes a finite timeout to the transport",
          "code": "seen = {}\nrequest_json(\"https://example.test\", lambda url, timeout: (seen.update({\"timeout\":timeout}) or DemoResponse(200,{\"results\":[]})))\nassert seen[\"timeout\"] == 5",
          "expected": 5,
          "actual": "seen[\"timeout\"]",
          "failureMessage": "Every request needs a finite timeout so a stalled service cannot hold the workflow indefinitely."
        },
        {
          "name": "Retries a transient HTTP 503 and succeeds",
          "code": "assert attempts[1] == 2",
          "expected": 2,
          "actual": "attempts[1]",
          "failureMessage": "A temporary 5xx response can be retried within a finite attempt budget."
        },
        {
          "name": "Uses bounded exponential retry delay",
          "code": "assert retry_delays == [1]",
          "expected": [
            1
          ],
          "actual": "retry_delays",
          "failureMessage": "Use a bounded backoff delay and a strict maximum attempt count rather than an unbounded retry loop."
        },
        {
          "name": "Does not retry a permanent HTTP 404",
          "code": "calls=[]\ntry:\n    request_json(\"https://example.test\",lambda url,timeout:(calls.append(1) or DemoResponse(404,{})))\nexcept ValueError:\n    pass\nelse:\n    raise AssertionError(\"HTTP 404 should be rejected\")\nassert len(calls)==1",
          "expected": 1,
          "actual": "len(calls)",
          "failureMessage": "Most 4xx responses need a corrected request or authentication, not an automatic retry."
        },
        {
          "name": "Parses JSON and validates the expected response shape",
          "code": "try:\n    request_json(\"https://example.test\",lambda url,timeout:DemoResponse(200,'{\"unexpected\": []}'))\nexcept ValueError:\n    pass\nelse:\n    raise AssertionError(\"A response without a results list should fail\")",
          "failureMessage": "Parse the JSON response and confirm that the required results value is a list before using it."
        },
        {
          "name": "Retries HTTP 429 rate limiting within the attempt cap",
          "code": "rate_calls=[]\ndef rate_transport(url,timeout):\n    rate_calls.append(1)\n    return DemoResponse(429 if len(rate_calls)==1 else 200,{\"results\":[{\"id\":7}]})\nrate_wait=[]\nassert request_json(\"https://example.test\",rate_transport,wait=rate_wait.append)[\"results\"]==[{\"id\":7}]\nassert len(rate_calls)==2 and rate_wait==[1]",
          "expected": [
            2,
            [
              1
            ]
          ],
          "actual": "[len(rate_calls),rate_wait]",
          "failureMessage": "Treat HTTP 429 as a rate-limit response and retry only after a bounded delay."
        },
        {
          "name": "Collects all pages and stops at the final page",
          "code": "assert [row[\"id\"] for row in orders]==[101,102,103]",
          "expected": [
            101,
            102,
            103
          ],
          "actual": "[row[\"id\"] for row in orders]",
          "failureMessage": "Follow the page signal until next_page is None and preserve the returned record order."
        },
        {
          "name": "Enforces the maximum-page safety limit",
          "code": "endless=lambda url,timeout:DemoResponse(200,{\"results\":[],\"next_page\":999})\ntry:\n    collect_pages(\"https://example.test\",{},endless,max_pages=2)\nexcept RuntimeError as error:\n    assert \"safety limit\" in str(error)\nelse:\n    raise AssertionError(\"Unbounded pagination must stop\")",
          "failureMessage": "A service that always advertises another page must not create an infinite collection loop."
        },
        {
          "name": "Rejects invalid retry configuration",
          "code": "try:\n    request_json(\"https://example.test\",lambda url,timeout:DemoResponse(200,{\"results\":[]}),max_attempts=0)\nexcept ValueError:\n    pass\nelse:\n    raise AssertionError(\"Zero attempts is invalid\")",
          "failureMessage": "Validate max_attempts before making a request; it must be at least one."
        },
        {
          "name": "Reads an optional token from the environment",
          "code": "assert authentication_headers({})=={} and authentication_headers({\"ANALYTICS_API_TOKEN\":\"sample-secret\"})=={\"Authorization\":\"Bearer sample-secret\"}",
          "expected": "Bearer sample-secret when configured",
          "actual": "authentication_headers({\"ANALYTICS_API_TOKEN\":\"sample-secret\"})",
          "failureMessage": "Keep credentials in environment configuration, never in source code or printed output."
        },
        {
          "name": "Saves collected JSON reproducibly",
          "code": "saved = json.loads(Path(\"data/orders.json\").read_text(encoding=\"utf-8\"))\nassert saved == orders and Path(\"data/orders.json\").is_file()",
          "expected": 3,
          "actual": "len(saved)",
          "failureMessage": "Save UTF-8 JSON to a known path with stable key ordering so another run can reproduce the collected dataset."
        },
        {
          "name": "Produces the documented offline output",
          "code": "assert __output__.splitlines()==[\n\"Request URL: https://data.example.test/orders?status=paid&limit=2\",\n\"Loaded pages: 2\",\n\"Order IDs: [101, 102, 103]\",\n\"Retry attempts: 2\",\n\"Retry delays: [1]\",\n\"Saved records: 3\",\n\"Authentication configured: True\"\n]",
          "expected": "Seven deterministic output lines with no external network calls",
          "actual": "__output__.strip()",
          "failureMessage": "The complete worked example must show the URL, pagination, retries, saved records and credential status without contacting a real API."
        }
      ]
    }
  },
  {
    "id": "p1-c18",
    "curriculumId": "P1-C18",
    "prerequisites": [
      "p1-c17"
    ],
    "title": "Python and database integration",
    "level": "Intermediate",
    "mins": 90,
    "packages": [
      "pandas"
    ],
    "plain": "A company may keep millions of orders in a database rather than in one spreadsheet. Python can ask the database for only the rows needed, then bring those rows into pandas for analysis. The important habits are to use parameters for values, use transactions for changes, check joins and totals, and close connections when the work is finished.",
    "definition": "A database connection represents a session with a database. A cursor or connection execution method sends SQL statements and returns rows. A parameterised query separates SQL structure from input values, reducing injection risk. A transaction groups changes into a unit that commits together or rolls back on failure. SQLite is an embedded relational database; pandas can read SQL query results into a DataFrame and write DataFrames back to a SQL table.",
    "analogy": "Think of the database as a secure storeroom with a clerk. SQL is the precise request form. A parameter placeholder is a blank on that form where the clerk places your search value; it is safer than letting the value rewrite the request. A transaction is a sealed batch: either every change is accepted or the batch is rolled back. pandas is your desk, where you analyse selected records after the clerk brings them out.",
    "example": "import sqlite3\nimport pandas as pd\ndef build_connection():\n    connection=sqlite3.connect(\":memory:\")\n    connection.execute(\"PRAGMA foreign_keys = ON\")\n    with connection:\n        connection.execute(\"CREATE TABLE customers (customer_id INTEGER PRIMARY KEY, customer_name TEXT NOT NULL UNIQUE)\")\n        connection.execute(\"CREATE TABLE orders (order_id INTEGER PRIMARY KEY, customer_id INTEGER NOT NULL REFERENCES customers(customer_id), status TEXT NOT NULL, amount REAL NOT NULL CHECK(amount >= 0))\")\n        connection.executemany(\"INSERT INTO customers VALUES (?, ?)\",[(1,\"Asha\"),(2,\"Mira\"),(3,\"Noor\")])\n        connection.executemany(\"INSERT INTO orders VALUES (?, ?, ?, ?)\",[(101,1,\"paid\",120),(102,2,\"paid\",330),(103,3,\"pending\",90)])\n    return connection\ndef find_customer(connection,customer_name):\n    return connection.execute(\"SELECT customer_id, customer_name FROM customers WHERE customer_name = ?\",(customer_name,)).fetchone()\ndef add_order(connection,order_id,customer_id,status,amount):\n    if amount<0:\n        raise ValueError(\"Order amount cannot be negative\")\n    with connection:\n        connection.execute(\"INSERT INTO orders VALUES (?, ?, ?, ?)\",(order_id,customer_id,status,amount))\ndef make_report():\n    connection=build_connection()\n    try:\n        paid_orders=pd.read_sql_query(\"\"\"\n            SELECT o.order_id,c.customer_name,o.amount\n            FROM orders AS o JOIN customers AS c ON c.customer_id=o.customer_id\n            WHERE o.status = ? AND o.amount >= ?\n            ORDER BY o.order_id\n        \"\"\",connection,params=(\"paid\",100))\n        summary=paid_orders.groupby(\"customer_name\",as_index=False).agg(order_count=(\"order_id\",\"count\"),revenue=(\"amount\",\"sum\"))\n        summary.to_sql(\"customer_summary\",connection,if_exists=\"replace\",index=False)\n        saved_summary=pd.read_sql_query(\"SELECT * FROM customer_summary ORDER BY customer_name\",connection)\n        return paid_orders,saved_summary,connection\n    finally:\n        connection.close()\npaid_orders,summary,closed_connection=make_report()\nprint(\"Paid orders:\",len(paid_orders))\nprint(\"Paid revenue:\",int(paid_orders[\"amount\"].sum()))\nprint(\"Customers:\",paid_orders[\"customer_name\"].tolist())\nprint(\"Summary rows:\",len(summary))",
    "expectedOutput": "Paid orders: 2\nPaid revenue: 450\nCustomers: ['Asha', 'Mira']\nSummary rows: 2",
    "prediction": "A report inserts three changes in one transaction, but the third row violates a foreign-key rule. What should happen when the transaction is rolled back?",
    "predictionAnswer": "None of the changes in that transaction should remain committed. A transaction is an all-or-nothing unit. The application should report or handle the integrity error and keep the database in its last consistent state.",
    "question": "Which approach safely looks up a customer name supplied by a user?",
    "options": [
      "Build SQL with f\"... WHERE name = '{customer_name}'\"",
      "Use WHERE customer_name = ? and pass (customer_name,) separately",
      "Remove spaces from the customer name and paste it into SQL"
    ],
    "answer": 1,
    "why": "A bound parameter is treated as a value, not executable SQL. String concatenation can let unexpected input change query logic and create SQL injection vulnerabilities.",
    "task": "Create an isolated SQLite database with customers and orders. Use keys and constraints. Safely insert and query records with placeholders and transactions, read a filtered join into pandas, group it, write the summary back, verify totals and close the connection even on failure.",
    "hint": "Use sqlite3.connect(':memory:'). Bind values with ? placeholders and pass a tuple separately. Use with connection: for a transaction, but remember that it does not automatically close the connection. Use try/finally for close. pandas.read_sql_query() and DataFrame.to_sql() connect SQL and pandas.",
    "solution": "import sqlite3\nimport pandas as pd\ndef build_connection():\n    connection=sqlite3.connect(\":memory:\")\n    connection.execute(\"PRAGMA foreign_keys = ON\")\n    with connection:\n        connection.execute(\"CREATE TABLE customers (customer_id INTEGER PRIMARY KEY, customer_name TEXT NOT NULL UNIQUE)\")\n        connection.execute(\"CREATE TABLE orders (order_id INTEGER PRIMARY KEY, customer_id INTEGER NOT NULL REFERENCES customers(customer_id), status TEXT NOT NULL, amount REAL NOT NULL CHECK(amount >= 0))\")\n        connection.executemany(\"INSERT INTO customers VALUES (?, ?)\",[(1,\"Asha\"),(2,\"Mira\"),(3,\"Noor\")])\n        connection.executemany(\"INSERT INTO orders VALUES (?, ?, ?, ?)\",[(101,1,\"paid\",120),(102,2,\"paid\",330),(103,3,\"pending\",90)])\n    return connection\ndef find_customer(connection,customer_name):\n    return connection.execute(\"SELECT customer_id, customer_name FROM customers WHERE customer_name = ?\",(customer_name,)).fetchone()\ndef add_order(connection,order_id,customer_id,status,amount):\n    if amount<0:\n        raise ValueError(\"Order amount cannot be negative\")\n    with connection:\n        connection.execute(\"INSERT INTO orders VALUES (?, ?, ?, ?)\",(order_id,customer_id,status,amount))\ndef make_report():\n    connection=build_connection()\n    try:\n        paid_orders=pd.read_sql_query(\"\"\"\n            SELECT o.order_id,c.customer_name,o.amount\n            FROM orders AS o JOIN customers AS c ON c.customer_id=o.customer_id\n            WHERE o.status = ? AND o.amount >= ?\n            ORDER BY o.order_id\n        \"\"\",connection,params=(\"paid\",100))\n        summary=paid_orders.groupby(\"customer_name\",as_index=False).agg(order_count=(\"order_id\",\"count\"),revenue=(\"amount\",\"sum\"))\n        summary.to_sql(\"customer_summary\",connection,if_exists=\"replace\",index=False)\n        saved_summary=pd.read_sql_query(\"SELECT * FROM customer_summary ORDER BY customer_name\",connection)\n        return paid_orders,saved_summary,connection\n    finally:\n        connection.close()\npaid_orders,summary,closed_connection=make_report()\nprint(\"Paid orders:\",len(paid_orders))\nprint(\"Paid revenue:\",int(paid_orders[\"amount\"].sum()))\nprint(\"Customers:\",paid_orders[\"customer_name\"].tolist())\nprint(\"Summary rows:\",len(summary))",
    "exercise": {
      "title": "Build a safe SQLite-to-pandas reporting workflow",
      "prompt": "Complete the functions to create a relational database, safely query and insert records, produce a paid-order DataFrame, aggregate by customer, write the summary table back to SQLite and close the connection safely.",
      "setup": "",
      "starter": "import sqlite3\nimport pandas as pd\ndef build_connection():\n    connection=sqlite3.connect(\":memory:\")\n    connection.execute(\"PRAGMA foreign_keys = ON\")\n    with connection:\n        # TODO: create customer and order tables with key and amount constraints.\n        pass\n    return connection\ndef find_customer(connection,customer_name):\n    # TODO: use a bound ? parameter, not string interpolation.\n    return None\ndef add_order(connection,order_id,customer_id,status,amount):\n    # TODO: validate amount and insert inside a transaction.\n    pass\ndef make_report():\n    connection=build_connection()\n    try:\n        # TODO: read a filtered SQL join to pandas; aggregate and write back.\n        return None,None,connection\n    finally:\n        connection.close()\npaid_orders,summary,closed_connection=make_report()\nprint(\"Database exercise ready for your implementation.\")",
      "hint": "Define primary keys, a foreign key and CHECK(amount >= 0). Bind values with ? placeholders, not string formatting. Group the query in pandas, write with to_sql(), read it back and close the connection in finally.",
      "solution": "import sqlite3\nimport pandas as pd\ndef build_connection():\n    connection=sqlite3.connect(\":memory:\")\n    connection.execute(\"PRAGMA foreign_keys = ON\")\n    with connection:\n        connection.execute(\"CREATE TABLE customers (customer_id INTEGER PRIMARY KEY, customer_name TEXT NOT NULL UNIQUE)\")\n        connection.execute(\"CREATE TABLE orders (order_id INTEGER PRIMARY KEY, customer_id INTEGER NOT NULL REFERENCES customers(customer_id), status TEXT NOT NULL, amount REAL NOT NULL CHECK(amount >= 0))\")\n        connection.executemany(\"INSERT INTO customers VALUES (?, ?)\",[(1,\"Asha\"),(2,\"Mira\"),(3,\"Noor\")])\n        connection.executemany(\"INSERT INTO orders VALUES (?, ?, ?, ?)\",[(101,1,\"paid\",120),(102,2,\"paid\",330),(103,3,\"pending\",90)])\n    return connection\ndef find_customer(connection,customer_name):\n    return connection.execute(\"SELECT customer_id, customer_name FROM customers WHERE customer_name = ?\",(customer_name,)).fetchone()\ndef add_order(connection,order_id,customer_id,status,amount):\n    if amount<0:\n        raise ValueError(\"Order amount cannot be negative\")\n    with connection:\n        connection.execute(\"INSERT INTO orders VALUES (?, ?, ?, ?)\",(order_id,customer_id,status,amount))\ndef make_report():\n    connection=build_connection()\n    try:\n        paid_orders=pd.read_sql_query(\"\"\"\n            SELECT o.order_id,c.customer_name,o.amount\n            FROM orders AS o JOIN customers AS c ON c.customer_id=o.customer_id\n            WHERE o.status = ? AND o.amount >= ?\n            ORDER BY o.order_id\n        \"\"\",connection,params=(\"paid\",100))\n        summary=paid_orders.groupby(\"customer_name\",as_index=False).agg(order_count=(\"order_id\",\"count\"),revenue=(\"amount\",\"sum\"))\n        summary.to_sql(\"customer_summary\",connection,if_exists=\"replace\",index=False)\n        saved_summary=pd.read_sql_query(\"SELECT * FROM customer_summary ORDER BY customer_name\",connection)\n        return paid_orders,saved_summary,connection\n    finally:\n        connection.close()\npaid_orders,summary,closed_connection=make_report()\nprint(\"Paid orders:\",len(paid_orders))\nprint(\"Paid revenue:\",int(paid_orders[\"amount\"].sum()))\nprint(\"Customers:\",paid_orders[\"customer_name\"].tolist())\nprint(\"Summary rows:\",len(summary))",
      "tests": [
        {
          "name": "Creates an isolated in-memory SQLite database",
          "code": "test_connection=build_connection()\nassert test_connection.execute(\"PRAGMA database_list\").fetchone()[2]==\"\"\ntest_connection.close()",
          "expected": "",
          "actual": "test_connection.execute(\"PRAGMA database_list\").fetchone()[2]",
          "failureMessage": "Use :memory: or a temporary database so practice never depends on a shared persistent database."
        },
        {
          "name": "Creates relational tables and enables foreign keys",
          "code": "test_connection=build_connection()\ntry:\n    names={row[0] for row in test_connection.execute(\"SELECT name FROM sqlite_master WHERE type='table'\")}\n    assert {\"customers\",\"orders\"}<=names and test_connection.execute(\"PRAGMA foreign_keys\").fetchone()[0]==1\nfinally:\n    test_connection.close()",
          "expected": [
            "customers",
            "orders"
          ],
          "actual": "table names and PRAGMA foreign_keys",
          "failureMessage": "Use primary keys, a foreign key and a database constraint to protect valid records."
        },
        {
          "name": "Uses parameter placeholders for customer lookup",
          "code": "test_connection=build_connection()\ntry:\n    assert find_customer(test_connection,\"Mira\")== (2,\"Mira\")\nfinally:\n    test_connection.close()\nassert any(isinstance(constant, str) and \"WHERE customer_name = ?\" in constant for constant in find_customer.__code__.co_consts)",
          "expected": [
            2,
            "Mira"
          ],
          "actual": "find_customer(test_connection,\"Mira\")",
          "failureMessage": "Bind the name separately with a ? placeholder instead of concatenating it into the SQL command."
        },
        {
          "name": "Treats SQL-looking user text as data",
          "code": "test_connection=build_connection()\ntry:\n    result=find_customer(test_connection,\"Mira' OR 1=1 --\")\n    remaining=test_connection.execute(\"SELECT COUNT(*) FROM customers\").fetchone()[0]\n    assert result is None and remaining==3\nfinally:\n    test_connection.close()",
          "expected": [
            null,
            3
          ],
          "actual": "[result, remaining]",
          "failureMessage": "A parameterised query must treat this input as a value, not as executable SQL."
        },
        {
          "name": "Reads the filtered join into a pandas DataFrame",
          "code": "assert list(paid_orders.columns)==[\"order_id\",\"customer_name\",\"amount\"] and len(paid_orders)==2",
          "expected": [
            "order_id",
            "customer_name",
            "amount"
          ],
          "actual": "list(paid_orders.columns)",
          "failureMessage": "Use pandas.read_sql_query() to turn database result rows into an analysis table."
        },
        {
          "name": "Reconciles the paid-order revenue",
          "code": "assert int(paid_orders[\"amount\"].sum())==450",
          "expected": 450,
          "actual": "int(paid_orders[\"amount\"].sum())",
          "failureMessage": "The two qualifying records total 120 + 330 = 450. Reconcile the extracted data."
        },
        {
          "name": "Writes and reloads the pandas summary table",
          "code": "assert len(summary)==2 and int(summary[\"revenue\"].sum())==450",
          "expected": [
            2,
            450
          ],
          "actual": "[len(summary),int(summary[\"revenue\"].sum())]",
          "failureMessage": "Write the transformed DataFrame with to_sql(), then read it back to verify the round trip."
        },
        {
          "name": "Commits a valid insert in a transaction",
          "code": "test_connection=build_connection()\ntry:\n    add_order(test_connection,104,1,\"paid\",50)\n    assert test_connection.execute(\"SELECT COUNT(*) FROM orders WHERE order_id=104\").fetchone()[0]==1\nfinally:\n    test_connection.close()",
          "expected": 1,
          "actual": "inserted order count",
          "failureMessage": "Use a transaction context for the insert so a valid change is committed as a unit."
        },
        {
          "name": "Rejects negative amounts before inserting",
          "code": "test_connection=build_connection()\ntry:\n    try:\n        add_order(test_connection,105,1,\"paid\",-1)\n    except ValueError:\n        pass\n    else:\n        raise AssertionError(\"Negative amount accepted\")\n    assert test_connection.execute(\"SELECT COUNT(*) FROM orders WHERE order_id=105\").fetchone()[0]==0\nfinally:\n    test_connection.close()",
          "expected": 0,
          "actual": "negative order count",
          "failureMessage": "Validate business values before writing; the table CHECK constraint is a second line of defence."
        },
        {
          "name": "Rolls back a foreign-key violation",
          "code": "test_connection=build_connection()\ntry:\n    before=test_connection.execute(\"SELECT COUNT(*) FROM orders\").fetchone()[0]\n    try:\n        add_order(test_connection,106,999,\"paid\",10)\n    except sqlite3.IntegrityError:\n        pass\n    else:\n        raise AssertionError(\"Unknown customer accepted\")\n    after=test_connection.execute(\"SELECT COUNT(*) FROM orders\").fetchone()[0]\n    assert before==after==3\nfinally:\n    test_connection.close()",
          "expected": 3,
          "actual": "after",
          "failureMessage": "A foreign-key failure must roll back the transaction and leave the original three orders unchanged."
        },
        {
          "name": "Closes the connection after report extraction",
          "code": "try:\n    closed_connection.execute(\"SELECT 1\")\nexcept sqlite3.ProgrammingError:\n    connection_closed=True\nelse:\n    connection_closed=False\nassert connection_closed",
          "expected": "closed",
          "actual": "connection_closed",
          "failureMessage": "Close the connection in finally. A connection context manager commits or rolls back, but does not itself guarantee closure."
        },
        {
          "name": "Handles an empty SQL result without inventing rows",
          "code": "test_connection=build_connection()\ntry:\n    empty=pd.read_sql_query(\"SELECT * FROM orders WHERE status = ?\",test_connection,params=(\"cancelled\",))\n    assert empty.empty and list(empty.columns)==[\"order_id\",\"customer_id\",\"status\",\"amount\"]\nfinally:\n    test_connection.close()",
          "expected": "empty DataFrame with the selected columns",
          "actual": "empty.shape",
          "failureMessage": "A valid query with no matching records should return an empty DataFrame with the expected columns."
        }
      ]
    }
  },
  {
    "id": "p1-c19",
    "curriculumId": "P1-C19",
    "prerequisites": [
      "p1-c18"
    ],
    "title": "Excel automation and repeatable reporting",
    "level": "Intermediate",
    "mins": 100,
    "pypiPackages": [
      "openpyxl"
    ],
    "plain": "A monthly report should not depend on someone copying cells by hand every time. Python can read a folder of incoming CSV files, validate their rows, combine the useful records, build a formatted Excel workbook and log what happened. Automation is valuable because the same rules run each month, and the report can be checked before it is sent.",
    "definition": "openpyxl is a Python library for reading and writing Excel workbook files in the Office Open XML .xlsx format. A workbook contains worksheets, cells, styles and workbook-level calculation settings. A repeatable reporting pipeline separates ingestion, validation, transformation, presentation and reconciliation. A formula is stored as an expression in a cell; openpyxl does not calculate the formula result, so a spreadsheet application must recalculate it when opened.",
    "analogy": "Think of a monthly reporting process as a small factory. Incoming CSV files are raw materials. Validation is the quality-control station that rejects damaged items and records why. The Summary and Details sheets are the finished product. Styles and number formats make the report readable, while totals and logs are the final inspection checklist. A reusable script is the factory procedure, so next month's run follows the same steps.",
    "setupGuide": "This chapter installs openpyxl automatically in the browser Python runtime through the lesson's package declaration. The first run needs an internet connection to download the library. Practice files are created only in the browser's temporary Python filesystem; reference tests use a fresh temporary directory. openpyxl can write formulas but does not calculate them.",
    "example": "import csv, logging\nfrom pathlib import Path\nfrom openpyxl import Workbook, load_workbook\nfrom openpyxl.styles import Font, PatternFill\nfrom openpyxl.utils import get_column_letter\nlogger=logging.getLogger(\"datatrail.reporting\")\ndef load_monthly_files(folder):\n    records=[]\n    skipped=0\n    required={\"month\",\"order_id\",\"revenue\"}\n    for path in sorted(Path(folder).glob(\"*.csv\")):\n        try:\n            with path.open(\"r\",encoding=\"utf-8\",newline=\"\") as handle:\n                reader=csv.DictReader(handle)\n                if not reader.fieldnames or not required.issubset(reader.fieldnames):\n                    raise ValueError(\"Required columns: month, order_id, revenue\")\n                for line_number,row in enumerate(reader,start=2):\n                    try:\n                        month=row[\"month\"].strip()\n                        order_id=row[\"order_id\"].strip()\n                        revenue=float(row[\"revenue\"])\n                        if len(month)!=7 or month[4]!=\"-\" or not order_id or revenue<0:\n                            raise ValueError(\"Invalid month, order ID or negative revenue\")\n                        records.append({\"month\":month,\"order_id\":order_id,\"revenue\":revenue})\n                    except (TypeError,ValueError):\n                        skipped+=1\n                        logger.warning(\"Skipped invalid row %s:%s\",path.name,line_number)\n        except (OSError,UnicodeError,ValueError) as error:\n            skipped+=1\n            logger.warning(\"Skipped file %s: %s\",path.name,error)\n    return sorted(records, key=lambda record: (record[\"month\"], record[\"order_id\"])), skipped\ndef build_report(records,destination):\n    if not records:\n        raise ValueError(\"No valid records are available for the workbook\")\n    destination=Path(destination)\n    destination.parent.mkdir(parents=True,exist_ok=True)\n    workbook=Workbook()\n    summary=workbook.active\n    summary.title=\"Summary\"\n    details=workbook.create_sheet(\"Details\")\n    summary.append([\"Month\",\"Order count\",\"Revenue\"])\n    details.append([\"Month\",\"Order ID\",\"Revenue\"])\n    for record in records:\n        details.append([record[\"month\"],record[\"order_id\"],record[\"revenue\"]])\n    monthly={}\n    for record in records:\n        values=monthly.setdefault(record[\"month\"],{\"orders\":0,\"revenue\":0.0})\n        values[\"orders\"]+=1\n        values[\"revenue\"]+=record[\"revenue\"]\n    for month in sorted(monthly):\n        values=monthly[month]\n        summary.append([month,values[\"orders\"],round(values[\"revenue\"],2)])\n    total_row=summary.max_row+1\n    summary.cell(total_row,1,\"Grand total\")\n    summary.cell(total_row,2,f\"=SUM(B2:B{total_row-1})\")\n    summary.cell(total_row,3,f\"=SUM(C2:C{total_row-1})\")\n    header_fill=PatternFill(\"solid\",fgColor=\"173F35\")\n    header_font=Font(bold=True,color=\"FFFFFF\")\n    for sheet in (summary,details):\n        sheet.freeze_panes=\"A2\"\n        sheet.auto_filter.ref=sheet.dimensions\n        for cell in sheet[1]:\n            cell.fill=header_fill\n            cell.font=header_font\n        for column_cells in sheet.columns:\n            width=min(max(len(str(cell.value or \"\")) for cell in column_cells)+2,32)\n            sheet.column_dimensions[get_column_letter(column_cells[0].column)].width=width\n    for row in summary.iter_rows(min_row=2,min_col=3,max_col=3):\n        row[0].number_format='₹#,##0.00'\n    for row in details.iter_rows(min_row=2,min_col=3,max_col=3):\n        row[0].number_format='₹#,##0.00'\n    for cell in summary[total_row]:\n        cell.font=Font(bold=True)\n    workbook.calculation.fullCalcOnLoad=True\n    workbook.calculation.forceFullCalc=True\n    workbook.save(destination)\n    workbook.close()\n    return destination\ndef run_pipeline(input_folder,output_file):\n    records,skipped=load_monthly_files(input_folder)\n    output_path=build_report(records,output_file)\n    logger.info(\"Accepted %s rows; skipped %s invalid rows\",len(records),skipped)\n    logger.info(\"Saved workbook to %s\",output_path.name)\n    return records,skipped,output_path\nincoming=Path(\"incoming\")\nincoming.mkdir(exist_ok=True)\n(incoming/\"2026-01.csv\").write_text(\"month,order_id,revenue\\n2026-01,101,1200\\n2026-01,102,800\\n\",encoding=\"utf-8\")\n(incoming/\"2026-02.csv\").write_text(\"month,order_id,revenue\\n2026-02,103,1500\\n2026-02,104,-25\\n\",encoding=\"utf-8\")\nlog_stream=__import__(\"io\").StringIO()\nhandler=logging.StreamHandler(log_stream)\nlogger.setLevel(logging.INFO)\nlogger.handlers.clear()\nlogger.addHandler(handler)\nrecords,skipped,report_path=run_pipeline(incoming,Path(\"reports/monthly_report.xlsx\"))\nworkbook=load_workbook(report_path,data_only=False)\nprint(\"Accepted rows:\",len(records))\nprint(\"Skipped rows:\",skipped)\nprint(\"Workbook sheets:\",workbook.sheetnames)\nprint(\"Report revenue:\",int(sum(row[\"revenue\"] for row in records)))\nprint(\"Grand total formula:\",workbook[\"Summary\"][\"C4\"].value)",
    "expectedOutput": "Accepted rows: 3\nSkipped rows: 1\nWorkbook sheets: ['Summary', 'Details']\nReport revenue: 3500\nGrand total formula: =SUM(C2:C3)",
    "prediction": "The workbook contains the formula =SUM(C2:C3), but is reopened with data_only=True immediately after openpyxl saves it. Should you expect openpyxl to have calculated and stored the total?",
    "predictionAnswer": "No. openpyxl writes formula text but does not run Excel's calculation engine. The workbook can request recalculation when opened in a spreadsheet application. Inspect the formula with data_only=False; do not claim that openpyxl calculated a cached numeric result.",
    "question": "Which statement about formulas in openpyxl is correct?",
    "options": [
      "openpyxl evaluates every Excel formula as it saves the file",
      "openpyxl stores formula text; Excel or another calculation engine calculates the result",
      "A formula cell must be replaced with a Python string to work"
    ],
    "answer": 1,
    "why": "openpyxl is a workbook reader/writer, not a spreadsheet calculation engine. You can write a formula and request recalculation on workbook open, but must not mistake the formula string for a calculated value.",
    "task": "Create a repeatable monthly reporting pipeline. Read every CSV in an incoming folder, validate headers and rows, log rejected records, combine accepted data, generate Summary and Details sheets, apply styles, currency formats, widths, filters and frozen headers, write a grand-total formula, and reconcile the source total to workbook detail rows.",
    "hint": "Use pathlib.Path.glob('*.csv') in sorted order and csv.DictReader. Validate month, order_id and non-negative revenue. Create workbook sheets, style headers with Font and PatternFill, apply number_format and AutoFilter, freeze row one, calculate totals in Python for reconciliation and save. Inspect formula text with load_workbook(..., data_only=False).",
    "solution": "import csv, logging\nfrom pathlib import Path\nfrom openpyxl import Workbook, load_workbook\nfrom openpyxl.styles import Font, PatternFill\nfrom openpyxl.utils import get_column_letter\nlogger=logging.getLogger(\"datatrail.reporting\")\ndef load_monthly_files(folder):\n    records=[]\n    skipped=0\n    required={\"month\",\"order_id\",\"revenue\"}\n    for path in sorted(Path(folder).glob(\"*.csv\")):\n        try:\n            with path.open(\"r\",encoding=\"utf-8\",newline=\"\") as handle:\n                reader=csv.DictReader(handle)\n                if not reader.fieldnames or not required.issubset(reader.fieldnames):\n                    raise ValueError(\"Required columns: month, order_id, revenue\")\n                for line_number,row in enumerate(reader,start=2):\n                    try:\n                        month=row[\"month\"].strip()\n                        order_id=row[\"order_id\"].strip()\n                        revenue=float(row[\"revenue\"])\n                        if len(month)!=7 or month[4]!=\"-\" or not order_id or revenue<0:\n                            raise ValueError(\"Invalid month, order ID or negative revenue\")\n                        records.append({\"month\":month,\"order_id\":order_id,\"revenue\":revenue})\n                    except (TypeError,ValueError):\n                        skipped+=1\n                        logger.warning(\"Skipped invalid row %s:%s\",path.name,line_number)\n        except (OSError,UnicodeError,ValueError) as error:\n            skipped+=1\n            logger.warning(\"Skipped file %s: %s\",path.name,error)\n    return sorted(records, key=lambda record: (record[\"month\"], record[\"order_id\"])), skipped\ndef build_report(records,destination):\n    if not records:\n        raise ValueError(\"No valid records are available for the workbook\")\n    destination=Path(destination)\n    destination.parent.mkdir(parents=True,exist_ok=True)\n    workbook=Workbook()\n    summary=workbook.active\n    summary.title=\"Summary\"\n    details=workbook.create_sheet(\"Details\")\n    summary.append([\"Month\",\"Order count\",\"Revenue\"])\n    details.append([\"Month\",\"Order ID\",\"Revenue\"])\n    for record in records:\n        details.append([record[\"month\"],record[\"order_id\"],record[\"revenue\"]])\n    monthly={}\n    for record in records:\n        values=monthly.setdefault(record[\"month\"],{\"orders\":0,\"revenue\":0.0})\n        values[\"orders\"]+=1\n        values[\"revenue\"]+=record[\"revenue\"]\n    for month in sorted(monthly):\n        values=monthly[month]\n        summary.append([month,values[\"orders\"],round(values[\"revenue\"],2)])\n    total_row=summary.max_row+1\n    summary.cell(total_row,1,\"Grand total\")\n    summary.cell(total_row,2,f\"=SUM(B2:B{total_row-1})\")\n    summary.cell(total_row,3,f\"=SUM(C2:C{total_row-1})\")\n    header_fill=PatternFill(\"solid\",fgColor=\"173F35\")\n    header_font=Font(bold=True,color=\"FFFFFF\")\n    for sheet in (summary,details):\n        sheet.freeze_panes=\"A2\"\n        sheet.auto_filter.ref=sheet.dimensions\n        for cell in sheet[1]:\n            cell.fill=header_fill\n            cell.font=header_font\n        for column_cells in sheet.columns:\n            width=min(max(len(str(cell.value or \"\")) for cell in column_cells)+2,32)\n            sheet.column_dimensions[get_column_letter(column_cells[0].column)].width=width\n    for row in summary.iter_rows(min_row=2,min_col=3,max_col=3):\n        row[0].number_format='₹#,##0.00'\n    for row in details.iter_rows(min_row=2,min_col=3,max_col=3):\n        row[0].number_format='₹#,##0.00'\n    for cell in summary[total_row]:\n        cell.font=Font(bold=True)\n    workbook.calculation.fullCalcOnLoad=True\n    workbook.calculation.forceFullCalc=True\n    workbook.save(destination)\n    workbook.close()\n    return destination\ndef run_pipeline(input_folder,output_file):\n    records,skipped=load_monthly_files(input_folder)\n    output_path=build_report(records,output_file)\n    logger.info(\"Accepted %s rows; skipped %s invalid rows\",len(records),skipped)\n    logger.info(\"Saved workbook to %s\",output_path.name)\n    return records,skipped,output_path\nincoming=Path(\"incoming\")\nincoming.mkdir(exist_ok=True)\n(incoming/\"2026-01.csv\").write_text(\"month,order_id,revenue\\n2026-01,101,1200\\n2026-01,102,800\\n\",encoding=\"utf-8\")\n(incoming/\"2026-02.csv\").write_text(\"month,order_id,revenue\\n2026-02,103,1500\\n2026-02,104,-25\\n\",encoding=\"utf-8\")\nlog_stream=__import__(\"io\").StringIO()\nhandler=logging.StreamHandler(log_stream)\nlogger.setLevel(logging.INFO)\nlogger.handlers.clear()\nlogger.addHandler(handler)\nrecords,skipped,report_path=run_pipeline(incoming,Path(\"reports/monthly_report.xlsx\"))\nworkbook=load_workbook(report_path,data_only=False)\nprint(\"Accepted rows:\",len(records))\nprint(\"Skipped rows:\",skipped)\nprint(\"Workbook sheets:\",workbook.sheetnames)\nprint(\"Report revenue:\",int(sum(row[\"revenue\"] for row in records)))\nprint(\"Grand total formula:\",workbook[\"Summary\"][\"C4\"].value)",
    "exercise": {
      "title": "Automate a monthly Excel reporting pipeline",
      "prompt": "Finish CSV ingestion, row validation, logging and workbook generation. Produce a reloadable .xlsx with Summary and Details sheets, monthly totals, formats, styles, frozen headers, filters, a grand-total formula and reconciliation output. The invalid row must be skipped and logged.",
      "setup": "",
      "starter": "import csv, logging\nfrom pathlib import Path\nfrom openpyxl import Workbook, load_workbook\nfrom openpyxl.styles import Font, PatternFill\nfrom openpyxl.utils import get_column_letter\nlogger=logging.getLogger(\"datatrail.reporting\")\ndef load_monthly_files(folder):\n    records=[]\n    skipped=0\n    # TODO: read sorted CSV files, validate headers and values, log bad rows.\n    # Return accepted records in chronological month/order order.\n    return sorted(records, key=lambda record: (record[\"month\"], record[\"order_id\"])), skipped\ndef build_report(records,destination):\n    # TODO: create styled Summary and Details sheets, filters, formats, widths and a formula.\n    return Path(destination)\ndef run_pipeline(input_folder,output_file):\n    # TODO: load, reconcile and save the workbook; log the outcome.\n    return [],0,Path(output_file)\nincoming=Path(\"incoming\")\nincoming.mkdir(exist_ok=True)\n(incoming/\"2026-01.csv\").write_text(\"month,order_id,revenue\\n2026-01,101,1200\\n2026-01,102,800\\n\",encoding=\"utf-8\")\n(incoming/\"2026-02.csv\").write_text(\"month,order_id,revenue\\n2026-02,103,1500\\n2026-02,104,-25\\n\",encoding=\"utf-8\")\nlog_stream=__import__(\"io\").StringIO()\nhandler=logging.StreamHandler(log_stream)\nlogger.setLevel(logging.INFO)\nlogger.handlers.clear()\nlogger.addHandler(handler)\nrecords,skipped,report_path=run_pipeline(incoming,Path(\"reports/monthly_report.xlsx\"))\nworkbook=load_workbook(report_path,data_only=False)\nprint(\"Accepted rows:\",len(records))\nprint(\"Skipped rows:\",skipped)\nprint(\"Workbook sheets:\",workbook.sheetnames)\nprint(\"Report revenue:\",int(sum(row[\"revenue\"] for row in records)))\nprint(\"Grand total formula:\",workbook[\"Summary\"][\"C4\"].value)",
      "hint": "Separate ingestion, validation, formatting and orchestration. Process source files in sorted order. Reject bad data with a useful log message. Remember openpyxl saves formula text but does not evaluate it.",
      "solution": "import csv, logging, math\nfrom datetime import datetime\nfrom pathlib import Path\nfrom openpyxl import Workbook, load_workbook\nfrom openpyxl.styles import Font, PatternFill\nfrom openpyxl.utils import get_column_letter\nlogger=logging.getLogger(\"datatrail.reporting\")\ndef load_monthly_files(folder):\n    records=[]\n    skipped=0\n    seen_order_ids=set()\n    required={\"month\",\"order_id\",\"revenue\"}\n    for path in sorted(Path(folder).glob(\"*.csv\")):\n        try:\n            with path.open(\"r\",encoding=\"utf-8\",newline=\"\") as handle:\n                reader=csv.DictReader(handle)\n                if not reader.fieldnames or not required.issubset(reader.fieldnames):\n                    raise ValueError(\"Required columns: month, order_id, revenue\")\n                for line_number,row in enumerate(reader,start=2):\n                    try:\n                        month=(row.get(\"month\") or \"\").strip()\n                        order_id=(row.get(\"order_id\") or \"\").strip()\n                        revenue=float(row[\"revenue\"])\n                        parsed_month=datetime.strptime(month,\"%Y-%m\")\n                        if parsed_month.strftime(\"%Y-%m\")!=month or not order_id or not math.isfinite(revenue) or revenue<0:\n                            raise ValueError(\"Invalid calendar month, order ID or finite non-negative revenue\")\n                        if order_id in seen_order_ids:\n                            raise ValueError(\"Duplicate order ID across monthly files\")\n                        seen_order_ids.add(order_id)\n                        records.append({\"month\":month,\"order_id\":order_id,\"revenue\":revenue})\n                    except (TypeError,ValueError):\n                        skipped+=1\n                        logger.warning(\"Skipped invalid row %s:%s\",path.name,line_number)\n        except (OSError,UnicodeError,ValueError) as error:\n            skipped+=1\n            logger.warning(\"Skipped file %s: %s\",path.name,error)\n    return sorted(records, key=lambda record: (record[\"month\"], record[\"order_id\"])), skipped\ndef build_report(records,destination):\n    if not records:\n        raise ValueError(\"No valid records are available for the workbook\")\n    destination=Path(destination)\n    destination.parent.mkdir(parents=True,exist_ok=True)\n    workbook=Workbook()\n    summary=workbook.active\n    summary.title=\"Summary\"\n    details=workbook.create_sheet(\"Details\")\n    summary.append([\"Month\",\"Order count\",\"Revenue\"])\n    details.append([\"Month\",\"Order ID\",\"Revenue\"])\n    for record in records:\n        details.append([record[\"month\"],record[\"order_id\"],record[\"revenue\"]])\n    monthly={}\n    for record in records:\n        values=monthly.setdefault(record[\"month\"],{\"orders\":0,\"revenue\":0.0})\n        values[\"orders\"]+=1\n        values[\"revenue\"]+=record[\"revenue\"]\n    for month in sorted(monthly):\n        values=monthly[month]\n        summary.append([month,values[\"orders\"],round(values[\"revenue\"],2)])\n    total_row=summary.max_row+1\n    summary.cell(total_row,1,\"Grand total\")\n    summary.cell(total_row,2,f\"=SUM(B2:B{total_row-1})\")\n    summary.cell(total_row,3,f\"=SUM(C2:C{total_row-1})\")\n    header_fill=PatternFill(\"solid\",fgColor=\"173F35\")\n    header_font=Font(bold=True,color=\"FFFFFF\")\n    for sheet in (summary,details):\n        sheet.freeze_panes=\"A2\"\n        sheet.auto_filter.ref=sheet.dimensions\n        for cell in sheet[1]:\n            cell.fill=header_fill\n            cell.font=header_font\n        for column_cells in sheet.columns:\n            width=min(max(len(str(cell.value or \"\")) for cell in column_cells)+2,32)\n            sheet.column_dimensions[get_column_letter(column_cells[0].column)].width=width\n    for row in summary.iter_rows(min_row=2,min_col=3,max_col=3):\n        row[0].number_format='₹#,##0.00'\n    for row in details.iter_rows(min_row=2,min_col=3,max_col=3):\n        row[0].number_format='₹#,##0.00'\n    for cell in summary[total_row]:\n        cell.font=Font(bold=True)\n    workbook.calculation.fullCalcOnLoad=True\n    workbook.calculation.forceFullCalc=True\n    workbook.save(destination)\n    workbook.close()\n    return destination\ndef run_pipeline(input_folder,output_file):\n    records,skipped=load_monthly_files(input_folder)\n    output_path=build_report(records,output_file)\n    logger.info(\"Accepted %s rows; skipped %s invalid rows\",len(records),skipped)\n    logger.info(\"Saved workbook to %s\",output_path.name)\n    return records,skipped,output_path\nincoming=Path(\"incoming\")\nincoming.mkdir(exist_ok=True)\n(incoming/\"2026-01.csv\").write_text(\"month,order_id,revenue\\n2026-01,101,1200\\n2026-01,102,800\\n\",encoding=\"utf-8\")\n(incoming/\"2026-02.csv\").write_text(\"month,order_id,revenue\\n2026-02,103,1500\\n2026-02,104,-25\\n\",encoding=\"utf-8\")\nlog_stream=__import__(\"io\").StringIO()\nhandler=logging.StreamHandler(log_stream)\nlogger.setLevel(logging.INFO)\nlogger.handlers.clear()\nlogger.addHandler(handler)\nrecords,skipped,report_path=run_pipeline(incoming,Path(\"reports/monthly_report.xlsx\"))\nworkbook=load_workbook(report_path,data_only=False)\nprint(\"Accepted rows:\",len(records))\nprint(\"Skipped rows:\",skipped)\nprint(\"Workbook sheets:\",workbook.sheetnames)\nprint(\"Report revenue:\",int(sum(row[\"revenue\"] for row in records)))\nprint(\"Grand total formula:\",workbook[\"Summary\"][\"C4\"].value)",
      "tests": [
        {
          "name": "Processes multiple monthly CSV files in stable order",
          "code": "assert [row[\"order_id\"] for row in records]==[\"101\",\"102\",\"103\"]",
          "expected": [
            "101",
            "102",
            "103"
          ],
          "actual": "[row[\"order_id\"] for row in records]",
          "failureMessage": "Discover all monthly CSV files in a predictable sorted order before combining valid rows."
        },
        {
          "name": "Skips and logs the invalid negative-revenue row",
          "code": "assert skipped==1 and \"Skipped invalid row 2026-02.csv:3\" in log_stream.getvalue()",
          "expected": [
            1,
            "warning with source row"
          ],
          "actual": "[skipped,log_stream.getvalue()]",
          "failureMessage": "Reject negative revenue and log the source file and line so the analyst can investigate."
        },
        {
          "name": "Creates a real workbook with summary and detail sheets",
          "code": "assert workbook.sheetnames==[\"Summary\",\"Details\"] and workbook[\"Details\"].max_row==4",
          "expected": [
            "Summary",
            "Details",
            4
          ],
          "actual": "[workbook.sheetnames,workbook[\"Details\"].max_row]",
          "failureMessage": "The deliverable must be a genuine multi-sheet .xlsx workbook, not a CSV renamed as Excel."
        },
        {
          "name": "Reconciles detail rows to the accepted source total",
          "code": "detail_total=sum(workbook[\"Details\"].cell(row,3).value for row in range(2,workbook[\"Details\"].max_row+1))\nassert detail_total==3500",
          "expected": 3500,
          "actual": "detail_total",
          "failureMessage": "The accepted source rows total 3,500. Reconcile the workbook detail values to that total."
        },
        {
          "name": "Builds the monthly summary correctly",
          "code": "assert [(workbook[\"Summary\"].cell(row,1).value,workbook[\"Summary\"].cell(row,2).value,workbook[\"Summary\"].cell(row,3).value) for row in (2,3)]==[(\"2026-01\",2,2000.0),(\"2026-02\",1,1500.0)]",
          "expected": [
            [
              "2026-01",
              2,
              2000
            ],
            [
              "2026-02",
              1,
              1500
            ]
          ],
          "actual": "summary month rows",
          "failureMessage": "Aggregate every month separately and retain its order count and revenue."
        },
        {
          "name": "Stores the grand-total formula and recalculation setting",
          "code": "assert workbook[\"Summary\"][\"C4\"].value==\"=SUM(C2:C3)\" and workbook.calculation.fullCalcOnLoad",
          "expected": "=SUM(C2:C3), fullCalcOnLoad=True",
          "actual": "[workbook[\"Summary\"][\"C4\"].value,workbook.calculation.fullCalcOnLoad]",
          "failureMessage": "openpyxl writes formula text but does not calculate it. Request recalculation when Excel opens the workbook."
        },
        {
          "name": "Applies readable header styling",
          "code": "assert workbook[\"Summary\"][\"A1\"].font.bold and workbook[\"Summary\"][\"A1\"].fill.fgColor.rgb.endswith(\"173F35\") and workbook[\"Details\"][\"A1\"].font.color.type==\"rgb\"",
          "expected": "Bold white header on dark green fill",
          "actual": "[workbook[\"Summary\"][\"A1\"].font.bold,workbook[\"Summary\"][\"A1\"].fill.fgColor.rgb]",
          "failureMessage": "Use contrasting header formatting to distinguish column names from workbook data."
        },
        {
          "name": "Sets currency number formats",
          "code": "assert workbook[\"Summary\"][\"C2\"].number_format==\"₹#,##0.00\" and workbook[\"Details\"][\"C2\"].number_format==\"₹#,##0.00\"",
          "expected": "₹#,##0.00",
          "actual": "[workbook[\"Summary\"][\"C2\"].number_format,workbook[\"Details\"][\"C2\"].number_format]",
          "failureMessage": "Apply an explicit currency number format so monetary cells are not unlabelled general numbers."
        },
        {
          "name": "Adds frozen headers and filter ranges",
          "code": "assert workbook[\"Summary\"].freeze_panes==\"A2\" and workbook[\"Details\"].freeze_panes==\"A2\" and workbook[\"Details\"].auto_filter.ref==\"A1:C4\"",
          "expected": [
            "A2",
            "A2",
            "A1:C4"
          ],
          "actual": "freeze panes and filter range",
          "failureMessage": "Freeze the first row and enable filters so the workbook remains usable for larger data."
        },
        {
          "name": "Sets usable column widths",
          "code": "assert workbook[\"Details\"].column_dimensions[\"A\"].width>=8 and workbook[\"Details\"].column_dimensions[\"C\"].width>=9",
          "expected": "width >= 8 and >= 9",
          "actual": "Details column widths",
          "failureMessage": "Set readable column widths instead of leaving narrow defaults."
        },
        {
          "name": "Saves a reloadable XLSX file at the requested destination",
          "code": "reloaded=load_workbook(report_path,read_only=True)\nassert report_path==Path(\"reports/monthly_report.xlsx\") and report_path.is_file() and reloaded.sheetnames==[\"Summary\",\"Details\"]\nreloaded.close()",
          "expected": "reports/monthly_report.xlsx with two sheets",
          "actual": "[str(report_path),report_path.is_file()]",
          "failureMessage": "Save to the requested path and reopen the real XLSX file to prove the deliverable is valid."
        },
        {
          "name": "Produces the documented reconciliation output",
          "code": "assert __output__.splitlines()==[\n\"Accepted rows: 3\",\n\"Skipped rows: 1\",\n\"Workbook sheets: ['Summary', 'Details']\",\n\"Report revenue: 3500\",\n\"Grand total formula: =SUM(C2:C3)\"\n]",
          "expected": "3 accepted, 1 skipped, two sheets and reconciled ₹3,500 total",
          "actual": "__output__.strip()",
          "failureMessage": "Show accepted/skipped counts and the workbook reconciliation so another analyst can check the handoff."
        },
        {
          "name": "Rejects impossible calendar months, non-finite revenue and duplicate order IDs",
          "code": "edge=Path(\"edge_cases\")\nedge.mkdir(exist_ok=True)\n(edge/\"2026-02.csv\").write_text(\"month,order_id,revenue\\\\n2026-02,101,20\\\\n\",encoding=\"utf-8\")\n(edge/\"2026-03.csv\").write_text(\"month,order_id,revenue\\\\n2026-13,201,10\\\\n2026-03,202,inf\\\\n2026-03,101,30\\\\n2026-03,203,30\\\\n\",encoding=\"utf-8\")\nedge_records,edge_skipped=load_monthly_files(edge)\nassert edge_skipped==3 and [row[\"order_id\"] for row in edge_records]==[\"101\",\"203\"]",
          "expected": [
            3,
            [
              "101",
              "203"
            ]
          ],
          "actual": "[edge_skipped,[row[\"order_id\"] for row in edge_records]]",
          "failureMessage": "Validate actual calendar months, finite non-negative revenue and order IDs that remain unique across all imported months."
        },
        {
          "name": "Does not retain an invalid duplicate key after a rejected record",
          "code": "edge2=Path(\"edge_duplicate_retry\")\nedge2.mkdir(exist_ok=True)\n(edge2/\"2026-01.csv\").write_text(\"month,order_id,revenue\\\\n2026-01,301,inf\\\\n2026-01,301,45\\\\n\",encoding=\"utf-8\")\nedge2_records,edge2_skipped=load_monthly_files(edge2)\nassert edge2_skipped==1 and [row[\"order_id\"] for row in edge2_records]==[\"301\"]",
          "expected": [
            1,
            [
              "301"
            ]
          ],
          "actual": "[edge2_skipped,[row['order_id'] for row in edge2_records]]",
          "failureMessage": "Reserve an order ID only after its full row passes validation; a rejected row must not block a later valid occurrence."
        }
      ]
    }
  },
  {
    "id": "p1-c20",
    "curriculumId": "P1-C20",
    "prerequisites": [
      "p1-c19"
    ],
    "title": "Analyst projects and interview readiness",
    "level": "Capstone",
    "mins": 120,
    "plain": "Knowing Python syntax is not the same as being ready to work as an analyst. An analyst must take an unfamiliar business question, inspect the source data, define measures, build a repeatable method, check the result and explain what the evidence can and cannot support. This capstone brings the four portfolio projects together and prepares you to explain your decisions in interviews.",
    "definition": "A portfolio project is a reproducible body of work that demonstrates problem framing, data quality, analytical method, communication and professional judgement. Readiness is not measured by the number of tools used; it is demonstrated by correct metrics, traceable decisions, validated outputs and the ability to defend assumptions. An interview question bank is structured practice across screening, core applied work, advanced reasoning and common analytical traps.",
    "analogy": "Think of the four projects as four client assignments and the interview as a review meeting. You are not being judged on whether you can recite every tool command. You are showing that you can understand the brief, inspect the evidence, explain the steps, catch mistakes and recommend an appropriate next action. Your portfolio is the work folder; your explanation is the meeting.",
    "setupGuide": "The capstone uses the four executable project folders under projects/programme-1. Run the project verifier after installing pandas, Matplotlib and openpyxl. The 100-question Programme 1 interview bank is available from the Project Studio and Interview Gym. The existing separate 51-question Python gym remains unchanged.",
    "example": "PROJECT_REQUIREMENTS = {\n    \"sales-quality\": {\"cleaned_sales.csv\", \"rejected_sales.csv\", \"decision_log.csv\", \"monthly_reconciliation.csv\", \"data_quality_report.json\"},\n    \"retail-performance\": {\"monthly_performance.csv\", \"region_performance.csv\", \"category_performance.csv\", \"customer_performance.csv\", \"three PNG charts\", \"insights.md\"},\n    \"funnel-cohort\": {\"funnel_metrics.csv\", \"cohort_activity.csv\", \"cohort_retention.csv\", \"cohort_retention_heatmap.png\", \"metric_definitions.md\"},\n    \"automated-reporting\": {\"source_snapshot.json\", \"report_database.sqlite\", \"paid_order_extract.csv\", \"monthly_paid_summary.csv\", \"monthly_report.xlsx\", \"run.log\"}\n}\nCOMMON_REQUIREMENTS = {\n    \"business_question\", \"metric_definitions\", \"methodology\",\n    \"limitations\", \"recommendation\", \"reproducible_steps\"\n}\nQUESTION_ALLOCATION = {\"Lowball\": 20, \"Core\": 35, \"Highball\": 25, \"Trap\": 20}\n\ndef review_submission(project_id, submission):\n    if project_id not in PROJECT_REQUIREMENTS:\n        raise ValueError(f\"Unknown project: {project_id}\")\n    if not isinstance(submission, dict):\n        raise TypeError(\"A project submission must be a dictionary\")\n    missing_common = sorted(COMMON_REQUIREMENTS - set(submission))\n    supplied = set(submission.get(\"deliverables\", []))\n    missing_deliverables = sorted(PROJECT_REQUIREMENTS[project_id] - supplied)\n    completed = len(PROJECT_REQUIREMENTS[project_id]) - len(missing_deliverables)\n    required = len(PROJECT_REQUIREMENTS[project_id])\n    return {\n        \"project_id\": project_id,\n        \"ready\": not missing_common and not missing_deliverables,\n        \"missing_common\": missing_common,\n        \"missing_deliverables\": missing_deliverables,\n        \"completed_deliverables\": completed,\n        \"required_deliverables\": required\n    }\n\ncomplete_submission = {\n    \"business_question\": \"Which decision does the analysis support?\",\n    \"metric_definitions\": \"Numerator, denominator, grain and time period are documented.\",\n    \"methodology\": \"Validation and transformation steps are reproducible.\",\n    \"limitations\": \"Coverage gaps and evidence limits are explicit.\",\n    \"recommendation\": \"The action follows from the measured evidence.\",\n    \"reproducible_steps\": \"Environment, inputs and run commands are documented.\"\n}\nsubmissions = {\n    project_id: {**complete_submission, \"deliverables\": sorted(required)}\n    for project_id, required in PROJECT_REQUIREMENTS.items()\n}\nreviews = [review_submission(project_id, submission) for project_id, submission in submissions.items()]\nready_count = sum(review[\"ready\"] for review in reviews)\nmissing_count = sum(len(review[\"missing_common\"]) + len(review[\"missing_deliverables\"]) for review in reviews)\nprint(\"Projects reviewed:\", len(reviews))\nprint(\"Portfolio-ready:\", ready_count)\nprint(\"Missing deliverables:\", missing_count)\nprint(\"Interview target:\", sum(QUESTION_ALLOCATION.values()))\nprint(\"Question allocation: Lowball 20 | Core 35 | Highball 25 | Trap 20\")",
    "expectedOutput": "Projects reviewed: 4\nPortfolio-ready: 4\nMissing deliverables: 0\nInterview target: 100\nQuestion allocation: Lowball 20 | Core 35 | Highball 25 | Trap 20",
    "prediction": "A project has a correct chart and a polished workbook, but no documented metric definitions, source validation or limitations. Should it be marked portfolio-ready?",
    "predictionAnswer": "No. Visual polish does not compensate for missing analytical evidence. The reviewer needs to know what each metric means, whether the inputs were validated, how the output can be reproduced and what the data cannot prove.",
    "question": "Which combination best demonstrates analyst readiness?",
    "options": [
      "A large notebook with many Python libraries imported",
      "A polished dashboard with no description of the source data",
      "A reproducible workflow with validated metrics, reconciled outputs, limitations and a defensible recommendation"
    ],
    "answer": 2,
    "why": "Analyst readiness is demonstrated through reasoning, correctness, reproducibility and communication. Tool use and visual polish help only when the analysis itself is defensible.",
    "task": "Use the four portfolio project checklists to review a submission. Confirm that the common business and documentation evidence is present, each project's specific deliverables are present, the review cannot pass an incomplete project, and the Programme 1 interview allocation totals 100.",
    "hint": "Use a dictionary keyed by the four project IDs. Compare the submission's common fields to COMMON_REQUIREMENTS and its deliverables to the corresponding PROJECT_REQUIREMENTS set. Return missing items in sorted order, count completed and required artifacts, reject unknown projects and verify the tier allocation.",
    "solution": "PROJECT_REQUIREMENTS = {\n    \"sales-quality\": {\"cleaned_sales.csv\", \"rejected_sales.csv\", \"decision_log.csv\", \"monthly_reconciliation.csv\", \"data_quality_report.json\"},\n    \"retail-performance\": {\"monthly_performance.csv\", \"region_performance.csv\", \"category_performance.csv\", \"customer_performance.csv\", \"three PNG charts\", \"insights.md\"},\n    \"funnel-cohort\": {\"funnel_metrics.csv\", \"cohort_activity.csv\", \"cohort_retention.csv\", \"cohort_retention_heatmap.png\", \"metric_definitions.md\"},\n    \"automated-reporting\": {\"source_snapshot.json\", \"report_database.sqlite\", \"paid_order_extract.csv\", \"monthly_paid_summary.csv\", \"monthly_report.xlsx\", \"run.log\"}\n}\nCOMMON_REQUIREMENTS = {\n    \"business_question\", \"metric_definitions\", \"methodology\",\n    \"limitations\", \"recommendation\", \"reproducible_steps\"\n}\nQUESTION_ALLOCATION = {\"Lowball\": 20, \"Core\": 35, \"Highball\": 25, \"Trap\": 20}\n\ndef review_submission(project_id, submission):\n    if project_id not in PROJECT_REQUIREMENTS:\n        raise ValueError(f\"Unknown project: {project_id}\")\n    if not isinstance(submission, dict):\n        raise TypeError(\"A project submission must be a dictionary\")\n    missing_common = sorted(COMMON_REQUIREMENTS - set(submission))\n    supplied = set(submission.get(\"deliverables\", []))\n    missing_deliverables = sorted(PROJECT_REQUIREMENTS[project_id] - supplied)\n    completed = len(PROJECT_REQUIREMENTS[project_id]) - len(missing_deliverables)\n    required = len(PROJECT_REQUIREMENTS[project_id])\n    return {\n        \"project_id\": project_id,\n        \"ready\": not missing_common and not missing_deliverables,\n        \"missing_common\": missing_common,\n        \"missing_deliverables\": missing_deliverables,\n        \"completed_deliverables\": completed,\n        \"required_deliverables\": required\n    }\n\ncomplete_submission = {\n    \"business_question\": \"Which decision does the analysis support?\",\n    \"metric_definitions\": \"Numerator, denominator, grain and time period are documented.\",\n    \"methodology\": \"Validation and transformation steps are reproducible.\",\n    \"limitations\": \"Coverage gaps and evidence limits are explicit.\",\n    \"recommendation\": \"The action follows from the measured evidence.\",\n    \"reproducible_steps\": \"Environment, inputs and run commands are documented.\"\n}\nsubmissions = {\n    project_id: {**complete_submission, \"deliverables\": sorted(required)}\n    for project_id, required in PROJECT_REQUIREMENTS.items()\n}\nreviews = [review_submission(project_id, submission) for project_id, submission in submissions.items()]\nready_count = sum(review[\"ready\"] for review in reviews)\nmissing_count = sum(len(review[\"missing_common\"]) + len(review[\"missing_deliverables\"]) for review in reviews)\nprint(\"Projects reviewed:\", len(reviews))\nprint(\"Portfolio-ready:\", ready_count)\nprint(\"Missing deliverables:\", missing_count)\nprint(\"Interview target:\", sum(QUESTION_ALLOCATION.values()))\nprint(\"Question allocation: Lowball 20 | Core 35 | Highball 25 | Trap 20\")",
    "exercise": {
      "title": "Build a portfolio and interview readiness checker",
      "prompt": "Complete review_submission() so it checks common evidence and project-specific artifacts for all four projects. It must return a structured readiness result, reject invalid inputs, count completed deliverables and verify the 100-question interview allocation.",
      "setup": "",
      "starter": "# Review a portfolio submission against explicit evidence requirements.\nPROJECT_REQUIREMENTS = {\n    \"sales-quality\": {\"cleaned_sales.csv\", \"rejected_sales.csv\", \"decision_log.csv\", \"monthly_reconciliation.csv\", \"data_quality_report.json\"},\n    \"retail-performance\": {\"monthly_performance.csv\", \"region_performance.csv\", \"category_performance.csv\", \"customer_performance.csv\", \"three PNG charts\", \"insights.md\"},\n    \"funnel-cohort\": {\"funnel_metrics.csv\", \"cohort_activity.csv\", \"cohort_retention.csv\", \"cohort_retention_heatmap.png\", \"metric_definitions.md\"},\n    \"automated-reporting\": {\"source_snapshot.json\", \"report_database.sqlite\", \"paid_order_extract.csv\", \"monthly_paid_summary.csv\", \"monthly_report.xlsx\", \"run.log\"}\n}\nCOMMON_REQUIREMENTS = {\"business_question\", \"metric_definitions\", \"methodology\", \"limitations\", \"recommendation\", \"reproducible_steps\"}\nQUESTION_ALLOCATION = {\"Lowball\": 20, \"Core\": 35, \"Highball\": 25, \"Trap\": 20}\n\ndef review_submission(project_id, submission):\n    # TODO: reject unknown projects and invalid submission types.\n    # TODO: list missing common narrative evidence and project-specific deliverables.\n    # TODO: return a structured readiness result; do not pass a partial project.\n    return {\"project_id\": project_id, \"ready\": False, \"missing_common\": [], \"missing_deliverables\": [], \"completed_deliverables\": 0, \"required_deliverables\": 0}\n\ncomplete_submission = {\n    \"business_question\": \"Which decision does the analysis support?\",\n    \"metric_definitions\": \"Numerator, denominator, grain and time period are documented.\",\n    \"methodology\": \"Validation and transformation steps are reproducible.\",\n    \"limitations\": \"Coverage gaps and evidence limits are explicit.\",\n    \"recommendation\": \"The action follows from the measured evidence.\",\n    \"reproducible_steps\": \"Environment, inputs and run commands are documented.\"\n}\nsubmissions = {\n    project_id: {**complete_submission, \"deliverables\": sorted(required)}\n    for project_id, required in PROJECT_REQUIREMENTS.items()\n}\nreviews = [review_submission(project_id, submission) for project_id, submission in submissions.items()]\nready_count = sum(review[\"ready\"] for review in reviews)\nmissing_count = sum(len(review[\"missing_common\"]) + len(review[\"missing_deliverables\"]) for review in reviews)\nprint(\"Projects reviewed:\", len(reviews))\nprint(\"Portfolio-ready:\", ready_count)\nprint(\"Missing deliverables:\", missing_count)\nprint(\"Interview target:\", sum(QUESTION_ALLOCATION.values()))\nprint(\"Question allocation: Lowball 20 | Core 35 | Highball 25 | Trap 20\")",
      "hint": "Compare sets rather than relying on list order. A project is ready only when there are no missing common fields and no missing deliverables. Return sorted missing lists to keep results deterministic. Validate project ID and submission type before checking evidence.",
      "solution": "PROJECT_REQUIREMENTS = {\n    \"sales-quality\": {\"cleaned_sales.csv\", \"rejected_sales.csv\", \"decision_log.csv\", \"monthly_reconciliation.csv\", \"data_quality_report.json\"},\n    \"retail-performance\": {\"monthly_performance.csv\", \"region_performance.csv\", \"category_performance.csv\", \"customer_performance.csv\", \"three PNG charts\", \"insights.md\"},\n    \"funnel-cohort\": {\"funnel_metrics.csv\", \"cohort_activity.csv\", \"cohort_retention.csv\", \"cohort_retention_heatmap.png\", \"metric_definitions.md\"},\n    \"automated-reporting\": {\"source_snapshot.json\", \"report_database.sqlite\", \"paid_order_extract.csv\", \"monthly_paid_summary.csv\", \"monthly_report.xlsx\", \"run.log\"}\n}\nCOMMON_REQUIREMENTS = {\n    \"business_question\", \"metric_definitions\", \"methodology\",\n    \"limitations\", \"recommendation\", \"reproducible_steps\"\n}\nQUESTION_ALLOCATION = {\"Lowball\": 20, \"Core\": 35, \"Highball\": 25, \"Trap\": 20}\n\ndef review_submission(project_id, submission):\n    if project_id not in PROJECT_REQUIREMENTS:\n        raise ValueError(f\"Unknown project: {project_id}\")\n    if not isinstance(submission, dict):\n        raise TypeError(\"A project submission must be a dictionary\")\n    missing_common = sorted(COMMON_REQUIREMENTS - set(submission))\n    supplied = set(submission.get(\"deliverables\", []))\n    missing_deliverables = sorted(PROJECT_REQUIREMENTS[project_id] - supplied)\n    completed = len(PROJECT_REQUIREMENTS[project_id]) - len(missing_deliverables)\n    required = len(PROJECT_REQUIREMENTS[project_id])\n    return {\n        \"project_id\": project_id,\n        \"ready\": not missing_common and not missing_deliverables,\n        \"missing_common\": missing_common,\n        \"missing_deliverables\": missing_deliverables,\n        \"completed_deliverables\": completed,\n        \"required_deliverables\": required\n    }\n\ncomplete_submission = {\n    \"business_question\": \"Which decision does the analysis support?\",\n    \"metric_definitions\": \"Numerator, denominator, grain and time period are documented.\",\n    \"methodology\": \"Validation and transformation steps are reproducible.\",\n    \"limitations\": \"Coverage gaps and evidence limits are explicit.\",\n    \"recommendation\": \"The action follows from the measured evidence.\",\n    \"reproducible_steps\": \"Environment, inputs and run commands are documented.\"\n}\nsubmissions = {\n    project_id: {**complete_submission, \"deliverables\": sorted(required)}\n    for project_id, required in PROJECT_REQUIREMENTS.items()\n}\nreviews = [review_submission(project_id, submission) for project_id, submission in submissions.items()]\nready_count = sum(review[\"ready\"] for review in reviews)\nmissing_count = sum(len(review[\"missing_common\"]) + len(review[\"missing_deliverables\"]) for review in reviews)\nprint(\"Projects reviewed:\", len(reviews))\nprint(\"Portfolio-ready:\", ready_count)\nprint(\"Missing deliverables:\", missing_count)\nprint(\"Interview target:\", sum(QUESTION_ALLOCATION.values()))\nprint(\"Question allocation: Lowball 20 | Core 35 | Highball 25 | Trap 20\")",
      "tests": [
        {
          "name": "Defines four distinct portfolio project checklists",
          "code": "assert set(PROJECT_REQUIREMENTS) == {\"sales-quality\", \"retail-performance\", \"funnel-cohort\", \"automated-reporting\"}",
          "expected": 4,
          "actual": "len(PROJECT_REQUIREMENTS)",
          "failureMessage": "The final programme must review each of its four named portfolio projects."
        },
        {
          "name": "Requires business framing and reproducible documentation",
          "code": "assert COMMON_REQUIREMENTS == {\"business_question\", \"metric_definitions\", \"methodology\", \"limitations\", \"recommendation\", \"reproducible_steps\"}",
          "expected": 6,
          "actual": "len(COMMON_REQUIREMENTS)",
          "failureMessage": "A portfolio submission needs a decision question, metric definitions, method, limitations, recommendation and reproducible run steps."
        },
        {
          "name": "Marks a complete submission as portfolio-ready",
          "code": "assert all(review_submission(project_id, {**complete_submission, \"deliverables\": list(required)})[\"ready\"] for project_id, required in PROJECT_REQUIREMENTS.items())",
          "expected": true,
          "actual": "all four ready flags",
          "failureMessage": "A submission is ready only when its common narrative evidence and all project-specific artifacts are present."
        },
        {
          "name": "Identifies missing common evidence",
          "code": "review = review_submission(\"sales-quality\", {\"deliverables\": list(PROJECT_REQUIREMENTS[\"sales-quality\"])})\nassert review[\"ready\"] is False and set(review[\"missing_common\"]) == COMMON_REQUIREMENTS",
          "expected": 6,
          "actual": "len(review[\"missing_common\"])",
          "failureMessage": "Do not treat artifacts alone as a portfolio story. The required business and reproducibility context must also be present."
        },
        {
          "name": "Identifies missing project-specific deliverables",
          "code": "submission = {**complete_submission, \"deliverables\": [\"cleaned_sales.csv\", \"decision_log.csv\"]}\nreview = review_submission(\"sales-quality\", submission)\nassert review[\"missing_deliverables\"] == [\"data_quality_report.json\", \"monthly_reconciliation.csv\", \"rejected_sales.csv\"]",
          "expected": [
            "data_quality_report.json",
            "monthly_reconciliation.csv",
            "rejected_sales.csv"
          ],
          "actual": "review[\"missing_deliverables\"]",
          "failureMessage": "The audit project must retain rejected records, reconciliation and its quality summary, not just a cleaned output."
        },
        {
          "name": "Calculates delivered-versus-required project artifact counts",
          "code": "review = review_submission(\"retail-performance\", {**complete_submission, \"deliverables\": [\"monthly_performance.csv\", \"insights.md\"]})\nassert review[\"completed_deliverables\"] == 2 and review[\"required_deliverables\"] == 6",
          "expected": [
            2,
            6
          ],
          "actual": "[review[\"completed_deliverables\"], review[\"required_deliverables\"]]",
          "failureMessage": "The rubric should show concrete completion counts for the selected project."
        },
        {
          "name": "Rejects unknown project identifiers",
          "code": "try:\n    review_submission(\"mystery-project\", complete_submission)\nexcept ValueError:\n    pass\nelse:\n    raise AssertionError(\"Unknown project must not pass\")",
          "failureMessage": "Only the four Programme 1 project definitions should be accepted by the readiness evaluator."
        },
        {
          "name": "Rejects invalid submission structures",
          "code": "try:\n    review_submission(\"sales-quality\", [\"not\", \"a\", \"mapping\"])\nexcept TypeError:\n    pass\nelse:\n    raise AssertionError(\"A list is not a valid submission mapping\")",
          "failureMessage": "Require a structured mapping of evidence fields before evaluating readiness."
        },
        {
          "name": "Uses the exact 100-question tier allocation",
          "code": "assert QUESTION_ALLOCATION == {\"Lowball\": 20, \"Core\": 35, \"Highball\": 25, \"Trap\": 20} and sum(QUESTION_ALLOCATION.values()) == 100",
          "expected": 100,
          "actual": "sum(QUESTION_ALLOCATION.values())",
          "failureMessage": "The Programme 1 bank must contain exactly 100 questions, split 20/35/25/20 across its four named tiers."
        },
        {
          "name": "Returns missing requirements in a stable sorted order",
          "code": "review = review_submission(\"funnel-cohort\", {**complete_submission, \"deliverables\": []})\nassert review[\"missing_deliverables\"] == sorted(review[\"missing_deliverables\"]) and review[\"missing_common\"] == []",
          "expected": "sorted deliverable list",
          "actual": "review[\"missing_deliverables\"]",
          "failureMessage": "Stable output makes the readiness report reproducible and easy to compare between revisions."
        },
        {
          "name": "Keeps partial delivery from passing the readiness gate",
          "code": "review = review_submission(\"automated-reporting\", {**complete_submission, \"deliverables\": [\"monthly_report.xlsx\", \"run.log\"]})\nassert review[\"ready\"] is False and review[\"completed_deliverables\"] == 2 and review[\"required_deliverables\"] == 6",
          "expected": [
            false,
            2,
            6
          ],
          "actual": "[review[\"ready\"], review[\"completed_deliverables\"], review[\"required_deliverables\"]]",
          "failureMessage": "A polished workbook alone is not a complete reporting pipeline: source snapshot, extract, summary and database are also required."
        },
        {
          "name": "Produces the documented readiness summary",
          "code": "assert __output__.splitlines() == [\n    \"Projects reviewed: 4\",\n    \"Portfolio-ready: 4\",\n    \"Missing deliverables: 0\",\n    \"Interview target: 100\",\n    \"Question allocation: Lowball 20 | Core 35 | Highball 25 | Trap 20\"\n]",
          "expected": "4 projects, 4 ready, 0 missing, 100 questions",
          "actual": "__output__.strip()",
          "failureMessage": "The worked example must produce a deterministic portfolio and interview readiness summary."
        }
      ]
    }
  }
];
