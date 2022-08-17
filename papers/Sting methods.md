# String methods
String is an example of an immutable type. A String object always represents the same string. StringBuilder is an example of a mutable type. It has methods to delete parts of the string, insert or replace characters, etc.

Since String is immutable, once created, a String object always has the same value. To add something to the end of a String, you have to create a new String object:
```
String s = "a";
s = s.concat("b"); // s+="b" and s=s+"b" also mean the same thing
```
 StringBuilder objects are mutable. This class has methods that change the value of the object, rather than just returning new values:
 ```
 StringBuilder sb = new StringBuilder("a");
sb.append("b");
```
