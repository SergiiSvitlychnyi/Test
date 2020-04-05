<%--
  Created by IntelliJ IDEA.
  User: HOME_SV
  Date: 03/04/2020
  Time: 19:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
      <title>Calculator</title>
      <link rel="stylesheet" href="./style.css">
  </head>
  <body>

  <script src="./main.js"></script>

  <p><input type="text" id="number1"></p>

  <button onclick="getElement1()" id="click1">1</button>
  <button onclick="getElement2()" id="click2">2</button>
  <button onclick="getElement3()" id="click3">3</button>
  <button onclick="plus()" id="plus">+</button>
  <button onclick="minus()" id="minus">-</button>

  <br>
  <button onclick="getElement4()" id="click4">4</button>
  <button onclick="getElement5()" id="click5">5</button>
  <button onclick="getElement6()" id="click6">6</button>
  <button onclick="multiply()" id="multiply">*</button>
  <button onclick="divide()" id="divide">/</button>
  <br>
  <button onclick="getElement7()" id="click7">7</button>
  <button onclick="getElement8()" id="click8">8</button>
  <button onclick="getElement9()" id="click9">9</button>
  <button onclick="bracket1()" id="bracket1">(</button>
  <button onclick="bracket2()" id="bracket2">)</button>
  <br>
  <button onclick="getElement0()" id="click0">0</button>
  <button onclick="undo()" id="undo">U</button>
  <button onclick="redo()" id="redo">R</button>
  <button onclick="result()" id="res">=</button>
  <button onclick="clearElements()" id="clear">C</button>

  <hr>
  <p id="result">Результат: 0</p>

  </body>
</html>
