"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {
	
	var number = 10;
	return number;
	
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {
	
	var first_num = 2.5;
	var second_num = 8;
	var sum = first_num*second_num;
	
	return sum;
}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {
	
	var minus = tal1-tal2;
	return minus;
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {
	
	var round = Math.round(tal);
	return round;
}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {
	
	var str = text.length;
	return str;
	
}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {
	
	var str = text.charAt(text.length - 2);
	return str;
	
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
	
	var name = surname + ', ' + firstname;
	return name;
	
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
	
	var str = words.substr(words.indexOf(" ") + 1);
	return str;
}

/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
	
	if(number >= 100)
	{
		return true;
	}
	else
	{
		return false;
	}
}

/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn) {
	
	var forgot = "Du har glömt att ange namn eller e-post";
	var send = "Ditt meddelande skickas";
	var ange = "Ange en e-postadress";
	var tecken = "@";
	
	if(!epost || !namn)
	{
		return forgot;
	}
	else if(epost.indexOf("@") > -1)
	{
		return send;
	}
	else
	{
		return ange;
	}
}

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {
	
	var x = 0;
	var len = arr.length/2;
	var value = 0;
	var temp = 0;
	while(x < len)
	{
		value = arr[x];
		x++;
	}
	return value;
	
}


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
	var x = 0;
	var y = 0;
	var count = 0;
	var median = 0;
	for(var i = 0; i < arr.length; i++)
	{
		x = x + arr[i];
		count++;
	}
	median = x/count;
	return median;
	
}






















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

