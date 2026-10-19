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
      "solution": "import csv\nimport io\nimport json\nfrom datetime import date\nfrom pathlib import Path\n\nsales_csv = \"order_id,order_date,status,amount\\nA101,2026-01-05,Paid,1200.00\\nA102,2026-01-06,Refunded,300.00\\nA103,2026-02-01,Paid,800.00\"\nrows = list(csv.DictReader(io.StringIO(sales_csv)))\npaid_rows = [row for row in rows if row[\"status\"] == \"Paid\"]\npaid_revenue = round(sum(float(row[\"amount\"]) for row in paid_rows), 2)\nfirst_order_date = date.fromisoformat(rows[0][\"order_date\"])\nsummary = {\n    \"row_count\": len(rows),\n    \"paid_order_count\": len(paid_rows),\n    \"paid_revenue\": paid_revenue,\n    \"first_order_month\": first_order_date.strftime(\"%Y-%m\")\n}\nreport_path = Path(\"sales_summary.json\")\nreport_path.write_text(json.dumps(summary, indent=2), encoding=\"utf-8\")\nsaved_summary = json.loads(report_path.read_text(encoding=\"utf-8\"))\n\nprint(\"Rows read:\", saved_summary[\"row_count\"])\nprint(\"Paid orders:\", saved_summary[\"paid_order_count\"])\nprint(\"Paid revenue:\", saved_summary[\"paid_revenue\"])\nprint(\"First order month:\", saved_summary[\"first_order_month\"])",
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
  }
];
