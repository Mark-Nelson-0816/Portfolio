Console.WriteLine("Drill 1");
string sampleString = "hello";
char sampleChar = 'a';
int sampleInt = 1;
byte sampleByte = 250;
float sampleFloat = 24.543f;
double sampleDouble = 542.31343d;
decimal sampleDecimal = 3123.334m;
bool sampleBool = true;

Console.WriteLine(sampleString);
Console.WriteLine(sampleChar);
Console.WriteLine(sampleInt);
Console.WriteLine(sampleByte);
Console.WriteLine(sampleFloat);
Console.WriteLine(sampleDouble);
Console.WriteLine(sampleDecimal);
Console.WriteLine(sampleBool);

Console.WriteLine("\nDrill 2");
int[] arrayOfInt = new int[5];
arrayOfInt[0] = 1;
arrayOfInt[1] = 2;
arrayOfInt[2] = 3;
arrayOfInt[3] = 4;
arrayOfInt[4] = 5;
for(int i = 0;i < arrayOfInt.Length; i++){
    Console.WriteLine(arrayOfInt[i]);
}

string[] arrayOfString = new string[3];
arrayOfString[0] = "Mark";
arrayOfString[1] = "John";
arrayOfString[2] = "David";
for (int i = 0; i < arrayOfString.Length; i++)
{
    Console.WriteLine(arrayOfString[i]);
}

int[] arrayOfGrades = new int[5] { 90, 91, 92, 94, 93 };
Console.WriteLine(arrayOfGrades.Average());

string name = "Mark Nelson P. Espinas";
var date = DateTime.Now;
Console.WriteLine($"Hello, {name}! Today is {date.DayOfWeek}, it's {date:HH:mm} now.");