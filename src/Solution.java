import java.util.Scanner;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
//        System.out.println("Hello, World.");
//        System.out.println("Hello, Java.");

//    ===================================== challenge 2 =====================

//        Scanner scan = new Scanner(System.in);
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

//        int i = scan.nextInt();
//        double d = scan.nextDouble();
//        scan.nextLine();
//        String s = scan.nextLine();
//
//        System.out.println("String: " + s);
//        System.out.println("Double: " + d);
//        System.out.println("Int: " + i);


//     ======================================= challenge 5 ==============================
//        System.out.println("================================");
//        for(int i = 0; i < 3; i++)
//        {
//            String s1 = scan.next();
//            int x = scan.nextInt();
//            System.out.printf( "%-15s%03d %n", s1, x);
//        }
//        System.out.println("================================");


//        int num = scan.nextInt();
//
//        for(int i = 1; i <= 10; i++){
//            System.out.println(num + " x " + i + " = " + (num * i));
//        }

// ===========================================  challenge 6 ===========================
//        Scanner in = new Scanner(System.in);
//        int t = in.nextInt();
//        for (int i = 0; i < t; i++) {
//            int a = in.nextInt();
//            int b = in.nextInt();
//            int n = in.nextInt();
//            for (int j = 0; j < n; j++) {
//                a += b;
//                if (j > 0)
//                    System.out.print(" ");
//                System.out.print(a);
//
//                b = b * 2;
//            }
//            System.out.println("");
//
//        }


//        ================================== challenge 7 ===================================

//        Scanner sc = new Scanner(System.in);
//        int t=sc.nextInt();
//
//        for(int i = 0; i < t; i++) {
//
//            try {
//                long x = sc.nextLong();
//                System.out.println(x+" can be fitted in:");
//                if(x >= -128 && x <= 127){
//                    System.out.println("* byte");
//                }
//                if (x >= -32768 && x <= 32767 ){
//                    System.out.println("* short");
//                }
//
//                if (x >= -2147483648 && x <= 2147483647 ){
//                    System.out.println("* int");
//                }
//
//                if (x >= -9223372036854775808L && x <= 9223372036854775807L){
//                    System.out.println("* long");
//                }
//            }
//
//            catch(Exception e) {
//                System.out.println(sc.next()+" can't be fitted anywhere.");
//            }
//
//        }

// ================================================ 8 challenge =================================

//        Scanner s = new Scanner(System.in);
//        int count = 1;
//
//        while (s.hasNext()) {
//            String ns = s.nextLine();
//            System.out.println(count + " " + ns);
//            count++;
//        }

// ================================================ 9 challenge =====================================

//        static Scanner scan = new Scanner(System.in);
//        static int B = scan.nextInt();
//        static int H = scan.nextInt();
//        static boolean flag = true;
//
//        static {
//            try {
//                if (B <= 0 || H <= 0) {
//                    flag = false;
//                    throw new Exception("Breadth and height must be positive");
//                }
//            } catch (Exception e) {
//                System.out.print(e);
//            }
//
//
//            if (flag) {
//                int area = B * H;
//                System.out.print(area);
//            }
//
//        }


//   ============================================= 10 =========================================

//        turning an integer into a string.
//
//        Scanner in = new Scanner(System.in);
//        int n = in.nextInt();
//
//        String s = Integer.toString(n);
//
//
//        if (n == Integer.parseInt(s)) {
//            System.out.println("Good job");
//        } else {
//            System.out.println("Wrong answer.");
//        }

//        =========================================== 11 ======================================

//        import java.io.*;
//import java.math.*;
//import java.security.*;
//import java.text.*;
//import java.util.*;
//import java.util.concurrent.*;
//import java.util.regex.*;
//import java.time.LocalDate;
//
//        class Result {
//
//            /*
//             * Complete the 'findDay' function below.
//             *
//             * The function is expected to return a STRING.
//             * The function accepts following parameters:
//             *  1. INTEGER month
//             *  2. INTEGER day
//             *  3. INTEGER year
//             */
//        }
//        public class JavaDateAndTime {
//            static List<String> days = Arrays.asList("SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY");
//
//
//            public static String findDay(int month, int day, int year) {
//
//                int y = Integer.parseInt(year);
//                int m = Integer.parseInt(month);
//                int d = Integer.parseInt(day);
//
//                Calendar c = Calendar.getInstance();
//                c.set(y, m-1, d);
//
//                int p = c.get(Calendar.DAY_OF_WEEK);
//                String s = days.get(p-1);
//                return s;
//
//            }
//
//            public static void main(String[] args) {
//                Scanner in = new Scanner(System.in);
//                String month = in.next();
//                String day = in.next();
//                String year = in.next();
//
//                System.out.println(findDay(day, month, year));
//
//            }
//        }
//
//        public class Solution {
//            public static void main(String[] args) throws IOException {
//                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
//                BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));
//
//                String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");
//
//                int month = Integer.parseInt(firstMultipleInput[0]);
//
//                int day = Integer.parseInt(firstMultipleInput[1]);
//
//                int year = Integer.parseInt(firstMultipleInput[2]);
//
//                String res = Result.findDay(month, day, year);
//
//                bufferedWriter.write(res);
//                bufferedWriter.newLine();
//
//                bufferedReader.close();
//                bufferedWriter.close();
//            }
//        }

//        ========================================== 12 =====================================

        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        String B=sc.next();
        /* Enter your code here. Print output to STDOUT. */

        System.out.println((A.length() + B.length()));
//        System.out.println( B.length());


        if(A.length() > B.length()){
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }


    }


    }

