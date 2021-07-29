import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
//        System.out.println("Hello, World.");
//        System.out.println("Hello, Java.");

//    ===================================== challenge 2 =====================

        Scanner scan = new Scanner(System.in);
//        int a = scan.nextInt();
//        int b = scan.nextInt();
//        int c = scan.nextInt();
//
//        System.out.println(a);
//        System.out.println(b);
//        System.out.println(c);


//  ========================================== challenge 3 ============================

//    Given an integer, N, perform the following conditional actions:
//
//    If N is odd, print Weird
//    If N is even and in the inclusive range of 2 to 5, print Not Weird
//    If N is even and in the inclusive range of 6 to 20, print Weird
//    If N is even and greater than 20, print Not Weird

//        int N = scan.nextInt();
//
//        if(N %2 !=0){
//            System.out.println("Weird");
//        } else if (N %2 == 0 && N >= 2 && N <= 5){
//            System.out.println("Not Weird");
//        } else if (N %2 == 0 && N >= 6 && N <= 20){
//            System.out.println("Weird");
//        } else if (N %2 == 0 && N > 20){
//            System.out.println("Not Weird");
//        }

//   ========================================= challenge 4 ============================

//        In this challenge, you must read an integer, a double, and a String from stdin, then print the values
//        according to the instructions in the Output Format section below.

        int i = scan.nextInt();
        double d = scan.nextDouble();
        scan.nextLine();
        String s = scan.nextLine();

        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);



//     ======================================= challenge 5 ==============================
        System.out.println("================================");
        for(int i=0;i<3;i++)
        {
            String s1 = scan.next();
            int x = scan.nextInt();
            System.out.printf( "%-15s%03d %n", s1, x);
        }
        System.out.println("================================");

    }



}
