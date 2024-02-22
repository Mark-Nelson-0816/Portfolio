//Calculator OOP
int fNum, sNum, op_Choice, con_Choice;
do
{
    do
    {
        Console.WriteLine("= = = Select the Operation = = =");
        Console.WriteLine("[1]Addition \n[2]Subtraction \n[3]Multiplication \n[4]Division");
        Console.Write("Enter you choice: ");
        op_Choice = int.Parse(Console.ReadLine());
        if ((op_Choice < 1) || (op_Choice > 4))
        {
            Console.WriteLine("Not a valid choice!\n");
        }
    } while ((op_Choice < 1) || (op_Choice > 4));

    Console.Write("Enter the first number: ");
    fNum = int.Parse(Console.ReadLine());
    Console.Write("Enter the second number: ");
    sNum = int.Parse(Console.ReadLine());

    Calculator myCalculator = new Calculator(fNum, sNum);

    Console.WriteLine("= = = Result = = =");
    if (op_Choice == 1)
    {
        Console.WriteLine($"The sum of {fNum} and {sNum} is {myCalculator.getSum()}.");
    }
    else if (op_Choice == 2)
    {
        Console.WriteLine($"The difference of {fNum} and {sNum} is {myCalculator.getDifference()}.");
    }
    else if (op_Choice == 3)
    {
        Console.WriteLine($"The product of {fNum} and {sNum} is {myCalculator.getProduct()}.");
    }
    else if (op_Choice == 4)
    {
        Console.WriteLine($"The quotient of {fNum} and {sNum} is {myCalculator.getQuotient()}.");
    }
    do
    {
        Console.WriteLine("Would you like to use the calculator again?\n[1]Yes\n[2]No");
        Console.Write("Enter your choice: ");
        con_Choice = int.Parse(Console.ReadLine());
        if ((con_Choice < 1) || (con_Choice > 2))
        {
            Console.WriteLine("Not a valid choice!\n");
        }else if (con_Choice == 2)
        {
            Console.WriteLine("Thank you!");
        }
    } while ((con_Choice < 1) || (con_Choice > 2));
} while (con_Choice == 1);
    
    