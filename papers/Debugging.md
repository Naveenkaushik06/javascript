# Debugging
It is common to have errors while writing codes and the errors can be due to syntax or logical. These errors create a lot of ambiguity in the logic and understanding of both users and programmers. There can also be errors in the code which can remain invisible to the programmer’s eye and can create havoc. To identify these errors we need Debuggers that can go through the entire code or program, identify the errors and also fix them.
## 1. debugger
The debugger keyword is used in the code to force stop the execution of the code at a breaking point and calls the debugging function. The debugger function is executed if any debugging is needed at all else no action is performed.
```
<h4>Debugging demonstrations using Debugger keyword</h4>
    The solution of 20 * 5 is:
        <p id="test"></p>


<p>If the debugger is turned on the code stops
execution at the start of the debugger</p>


        var x = 20;
var y = 5;
var z = x * y;
debugger;
document.getElementById("test").innerHTML = z;
```
## 2. Use of console.log() method
There is another way in which the JS values can be displayed in the debugger window.
```
<h3>GeeksforGeeks</h3>
<h4>Hello Geek</h4>

<p>
1. To view the result activate debugging of your
browser(preferred the latest) by pressing F12 <br>
2. Select "Console" in the debugger menu.
</p>


x = "Where do you work?"
y = "I work at GeeksforGeeks"
console.log(x);
console.log(y);
```
## 3. Setting Break Points:
The console.log() is a good way to debug errors but setting breakpoint is a faster, efficient and better method. In this method, Breakpoints are set in code which stops the execution of code at that point so that the values of variables can be examined at that time.

Here are some advantages of using Breakpoints over console.log() method:

* In console.log() method user has to understand the code and manually put console.log() at points in the code. But in breakpoints method, we can set breakpoints through Developers tool anywhere in code without even knowing it.
* In console.log() method we have to manually print values of different variables but at a certain breakpoint, all the values of all variables are displayed automatically in Developers tool.

Enter Developers tool section by pressing F12 key and go to sources.
In the source section, select a javascript file and set breakpoints by either selecting from the provided list like DOM breakpoints or Event listener breakpoints which stops the execution of code whenever an event occurs.
