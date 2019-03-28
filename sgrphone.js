function showfilteroptions(){
	document.getElementById('filterbuttons').style.display = "block";

}

function dropmenu1() {
		document.getElementById('dlist1').style.visibility = "visible";
		document.getElementById('dlist1').style.opacity = "1";
		document.getElementById('dlist2').style.visibility = "hidden";
		document.getElementById('dlist2').style.opacity = "0";
		document.getElementById('dlist3').style.visibility = "hidden";
		document.getElementById('dlist3').style.opacity = "0";
		document.getElementById('dlist4').style.visibility = "hidden";
		document.getElementById('dlist4').style.opacity = "0";
	}
	function dropmenu2() {
		document.getElementById('dlist2').style.visibility = "visible";
		document.getElementById('dlist2').style.opacity = "1";
		document.getElementById('dlist1').style.visibility = "hidden";
		document.getElementById('dlist1').style.opacity = "0";
		document.getElementById('dlist3').style.visibility = "hidden";
		document.getElementById('dlist3').style.opacity = "0";
		document.getElementById('dlist4').style.visibility = "hidden";
		document.getElementById('dlist4').style.opacity = "0";
	}
	function dropmenu3() {
		document.getElementById('dlist3').style.visibility = "visible";
		document.getElementById('dlist3').style.opacity = "1";
		document.getElementById('dlist2').style.visibility = "hidden";
		document.getElementById('dlist2').style.opacity = "0";
		document.getElementById('dlist1').style.visibility = "hidden";
		document.getElementById('dlist1').style.opacity = "0";
		document.getElementById('dlist4').style.visibility = "hidden";
		document.getElementById('dlist4').style.opacity = "0";
	}
	function dropmenu4() {
		document.getElementById('dlist4').style.visibility = "visible";
		document.getElementById('dlist4').style.opacity = "1";
		document.getElementById('dlist2').style.visibility = "hidden";
		document.getElementById('dlist2').style.opacity = "0";
		document.getElementById('dlist3').style.visibility = "hidden";
		document.getElementById('dlist3').style.opacity = "0";
		document.getElementById('dlist1').style.visibility = "hidden";
		document.getElementById('dlist1').style.opacity = "0";
	}
	function closebutton(){
		document.getElementById('dlist4').style.visibility = "hidden";
		document.getElementById('dlist4').style.opacity = "0";
		document.getElementById('dlist2').style.visibility = "hidden";
		document.getElementById('dlist2').style.opacity = "0";
		document.getElementById('dlist3').style.visibility = "hidden";
		document.getElementById('dlist3').style.opacity = "0";
		document.getElementById('dlist1').style.visibility = "hidden";
		document.getElementById('dlist1').style.opacity = "0";
	}
	function closebutton2(){
		document.getElementById('displayvolcal').style.height = "0";
		}
		function closebutton3(){
		document.getElementById('displaybfinder').style.height = "0";
		}
		function closebutton4(){
		document.getElementById('displaycbvolume').style.height = "0";
		}
		function closebutton5(){
		document.getElementById('boardtext').innerHTML = "";
		document.getElementById('closebutton3').style.display = "none";
		document.getElementById('frame1').style.height = "0";
		document.getElementById('if1').src = "";
		}
	function openvolcal(){
		document.getElementById('displayvolcal').style.height =
		"auto";
	}
	function beginnerv() {
		var bv = input1.value / 5.25 ;
		document.getElementById("dis1").innerHTML = bv.toFixed(1) + " Liters" ;
		document.getElementById("vol").value = bv.toFixed(1) ;
	}
	function intermediatev() {
		var bv = input1.value / 6.00 ;
		document.getElementById("dis1").innerHTML = bv.toFixed(1) + " Liters" ;
		document.getElementById("vol").value = bv.toFixed(1) ;
	}
	function expertv() {
		var bv = input1.value / 6.25 ;
		document.getElementById("dis1").innerHTML = bv.toFixed(1) + " Liters" ;
		document.getElementById("vol").value = bv.toFixed(1) ;
	}
	function openbfinder(){
		document.getElementById('displaybfinder').style.height =
		"auto";
	}
	
	
	class Surfboards{
			constructor(company, volume, text, height, playfunction,wavesize) {
				this._company = company;
				this._volume = volume;
				this._text = text;
				this._height = height;
				this._playfunction = playfunction;
				this._wavesize = wavesize;
			}
			get company() {
				return this._company;
			}
			get volume() {
				return this._volume;
			}
			get text() {
				return this._text;
			}
			get height() {
				return this._height;
			}
			get playfunction() {
				return this._playfunction;
			}
			get wavesize() {
				return this._wavesize;
			
			}
		}
        let c =[];
		c.push( new Surfboards("chili",22.4, "Oh one 5'6 18-1/2 2-1/8 round tail",66,"playchili3()",2));
	  c.push( new Surfboards("chili",23.5, "Oh one 5'7 18-5/8 2-3/16 round tail",67,"playchili3()",2));
		
	   c.push( new Surfboards("chili",24.00, "Oh one 5'8   18-3/4  2 3/16 round tail",68,"playchili3()",2));
		
	   c.push( new Surfboards("chili",25.20, "Oh one 5'9   18-7/8  2-1/4 round tail",69,"playchili3()",2));
		
	   c.push( new Surfboards("chili",26.40, "Oh one 5'10   19  2-5/16 round tail",70,"playchili3()",2));
		
	   c.push( new Surfboards("chili",27.60, "Oh one 5'11   19-1/8  2-3/8 round tail",71,"playchili3()",2));
		
	   c.push( new Surfboards("chili",28.80, "Oh one 6'0   19-1/4  2-7/16 round tail",72,"playchili3()",2));
		
	   c.push( new Surfboards("chili",30.00, "Oh one 6'1	19-3/8  2-1/2 round tail",73,"playchili3()",2));
		
	   c.push(new Surfboards("chili",31.50, "Oh one 6'2	  19-5/8  2-9/16 round tail",74,"playchili3()",2));
		
	   c.push(new Surfboards("chili",32.70, "Oh one 6'3	  19-3/4  2-5/8 round tail",75,"playchili3()",2));
		
	   c.push(new Surfboards("chili",33.50, "Oh one 6'4	  19-7/8  2-5/8 round tail",76,"playchili3()",2));   
		
	    c.push(new Surfboards("chili",35.40, "Oh one 6'5   20  2-3/4  round tail",77,"playchili3()",2));
		
	    c.push(new Surfboards("chili",37.70, "Oh one 6'6   20-1/8  2-7/8 round tail",78,"playchili3()",2));

	    c.push(new Surfboards("chili",23.90, "Nevada 5'8   18-1/2  2-3/16 round square tail",68,"playchili5()",2));

	    c.push(new Surfboards("chili",25.30, "Nevada 5'9	18-3/4  2-1/4 round square tail",69,"playchili5()",2));

	    c.push(new Surfboards("chili",26.50, "Nevada 5'10	18-7/8	2-5/16 round square tail",70,"playchili5()",2));

	    c.push(new Surfboards("chili",27.70, "Nevada 5'11	19	2-3/8 round square tail",71,"playchili5()",2));

	    c.push(new Surfboards("chili",29.10, "Nevada 6'0	19-1/8	2-7/16 round square tail",72,"playchili5()",2));

	    c.push(new Surfboards("chili",30.30, "Nevada 6'1	19-1/4	2-1/2 round square tail",73,"playchili5()",2));

	    c.push(new Surfboards("chili",31.70, "Nevada 6'2	19-1/2	2-9/16 round square tail",74,"playchili5()",2));

	    c.push(new Surfboards("chili",33.30, "Nevada 6'3	19-3/4	2-5/8 round square tail",75,"playchili5()",2));

	    c.push(new Surfboards("chili",34.00, "Nevada 6'4	19-7/8	2-5/8 round square tail",76,"playchili5()",2));

	    c.push(new Surfboards("chili",36.00	, "Nevada 6'6	20-1/4	2-3/4 round square tail",77,"playchili5()",2));

	    c.push(new Surfboards("chili",38.00	, "Nevada 6'8	20-1/2	2-3/4 round square tail",78,"playchili5()",2));

	    c.push(new Surfboards("chili",41.10, "Nevada 6'10	21 2-7/8 round square tail",79,"playchili5()",2));

	    c.push(new Surfboards("chili",22.50, "Fader 5'8   18-3/8	2-1/8 thumb tail",68,"playchili2()",3));

	    c.push(new Surfboards("chili",23.10, "Fader 5'9	  18-1/2	2-1/8 thumb tail",69,"playchili2()",3));

	    c.push(new Surfboards("chili",24.50, "Fader 5'10	18-5/8	2-3/16 thumb tail",70,"playchili2()",3));

	    c.push(new Surfboards("chili",25.80, "Fader 5'11	18-3/4	2-1/4 thumb tail",71,"playchili2()",3));

	    c.push(new Surfboards("chili",27.00, "Fader 6'0    18-7/8	2-3/8 thumb tail",72,"playchili2()",3));

	    c.push(new Surfboards("chili",28.30, "Fader 6'1	   19	2-7/16 thumb tail",73,"playchili2()",3));

	    c.push(new Surfboards("chili",29.40, "Fader 6'2   19-1/8	2-1/2 thumb tail",74,"playchili2()",3));

	    c.push(new Surfboards("chili",30.60, "Fader 6'3	   19-1/4	 2-9/16 thumb tail",75,"playchili2()",3));

	    c.push(new Surfboards("chili",31.90, "Fader 6'4	  19-3/8	2-5/8 thumb tail",76,"playchili2()",3));

	    c.push(new Surfboards("chili",32.30, "Fader 6'5   19-3/8	2-3/8 thumb tail",77,"playchili2()",3));

	    c.push(new Surfboards("chili",33.00, "Fader 6'6	  19-1/2	2-5/8 thumb tail",78,"playchili2()",3));

	    c.push(new Surfboards("chili",23.70, "Rare Bird 5'4	19	2 3/16 thumb tail",64,"playchili4()",2));

	    c.push(new Surfboards("chili",24.80, "Rare Bird 5'5	19-1/8	2-1/4 thumb tail",65,"playchili4()",2));

	    c.push(new Surfboards("chili",25.30, "Rare Bird 5'6	19-1/4 2-1/4 thumb tail",66,"playchili4()",2));

        c.push(new Surfboards("chili",26.50, "Rare Bird 5'7	19-3/8	2-5/16 thumb tail",67,"playchili4()",2));

        c.push(new Surfboards("chili",27.70, "Rare Bird 5'8	19-1/2	2-3/8 thumb tail",68,"playchili4()",2));

        c.push(new Surfboards("chili",28.30, "Rare Bird 5'9	19-5/8	2-7/16 thumb tail",69,"playchili4()",2));

        c.push(new Surfboards("chili",30.30, "Rare Bird 5'10	19-3/4	2-1/2 thumb tail",70,"playchili4()",2));

	    c.push(new Surfboards("chili",31.00, "Rare Bird 5'11	19-7/8	2-1/2 thumb tail",71,"playchili4()",2));

	    c.push(new Surfboards("chili",33.00, "Rare Bird 6'0	20	2-5/8 thumb tail",72,"playchili4()",2));

	    c.push(new Surfboards("chili",33.70, "Rare Bird 6'1	20-1/8	2-5/8 thumb tail",73,"playchili4()",2));

	    c.push(new Surfboards("chili",35.70, "Rare Bird 6'2	20-1/4	2-3/4 thumb tail",74,"playchili4()",2));

	    c.push(new Surfboards("chili",36.30, "Rare Bird 6'3	20-3/8	2-3/4 thumb tail",75,"playchili4()",2));

	    c.push(new Surfboards("chili",37.00, "Rare Bird 6'4	20-1/2	2-3/4 thumb tail",76,"playchili4()",2));

        c.push(new Surfboards("chili",37.50, "Rare Bird 6'5	20-1/2	2-3/4 thumb tail",77,"playchili4()",2));

	    c.push(new Surfboards("chili",38.60, "Rare Bird 6'6	20-1/2	2-7/8 thumb tail",78,"playchili4()",2));


	    

  c.push(new Surfboards("js",25.8, `Monsta 8  squash tail  5' 11" 18 1/2" 2 1/4"`,71,"playmovie6()",2));
  c.push(new Surfboards("js",26.7, `Monsta 8  squash tail  5' 11" 18 5/8" 2 5/16"`,71,"playmovie6()",2));
  c.push(new Surfboards("js",27.6, `Monsta 8  squash tail  5' 11" 18 3/4" 2 3/8"`,71,"playmovie6()",2));
  c.push(new Surfboards("js",27.2, `Monsta 8  squash tail  6' 0" 18 3/4" 2 5/16"`,72,"playmovie6()",2));
  c.push(new Surfboards("js",28.2, `Monsta 8  squash tail  6' 0" 18 7/8" 2 3/8"`,72,"playmovie6()",2));
  c.push(new Surfboards("js",29.3, `Monsta 8  squash tail  6' 0" 19 " 2 7/16"`,72,"playmovie6()",2));
  c.push(new Surfboards("js",28.6, `Monsta 8  squash tail  6' 1" 18 7/8" 2 3/8"`,73,"playmovie6()",2));
  c.push(new Surfboards("js",29.7, `Monsta 8  squash tail  6' 1" 19 " 2 7/16"`,73,"playmovie6()",2));
  c.push(new Surfboards("js",30.8, `Monsta 8  squash tail  6' 1" 19 1/8" 2 1/2"`,73,"playmovie6()",2));
  c.push(new Surfboards("js",29.2, `Monsta 8  squash tail  6' 2" 19 " 2 3/8"`,74,"playmovie6()",2));
  c.push(new Surfboards("js",30.3, `Monsta 8  squash tail  6' 2" 19 1/8" 2 7/16"`,74,"playmovie6()",2));
  c.push(new Surfboards("js",31.3, `Monsta 8  squash tail  6' 2" 19 1/4" 2 1/2"`,74,"playmovie6()",2));
  c.push(new Surfboards("js",30.7, `Monsta 8  squash tail  6' 3" 19 1/8" 2 7/16"`,75,"playmovie6()",2));
  c.push(new Surfboards("js",31.8, `Monsta 8  squash tail  6' 3" 19 1/4" 2 1/2"`,75,"playmovie6()",2));
  c.push(new Surfboards("js",33.1, `Monsta 8  squash tail  6' 3" 19 1/2" 2 9/16"`,75,"playmovie6()",2));
  c.push(new Surfboards("js",32.3, `Monsta 8  squash tail  6' 4" 19 1/4" 2 1/2"`,76,"playmovie6()",2));
  c.push(new Surfboards("js",33.5, `Monsta 8  squash tail  6' 4" 19 1/2" 2 9/16"`,76,"playmovie6()",2));
  c.push(new Surfboards("js",34.9, `Monsta 8  squash tail  6' 4" 19 3/4" 2 5/8"`,76,"playmovie6()",2));
  c.push(new Surfboards("js",35.4, `Monsta 8  squash tail  6' 5" 19 3/4" 2 5/8"`,77,"playmovie6()",2));
  c.push(new Surfboards("js",37.1, `Monsta 8  squash tail  6' 6" 19 7/8" 2 11/16"`,78,"playmovie6()",2));
  c.push(new Surfboards("js",39.1, `Monsta 8  squash tail  6' 8" 20 " 2 3/4"`,80,"playmovie6()",2));
  
  c.push(new Surfboards("js",23.2, `Forget me not round tail 5' 8" 18 1/8" 2 3/16"`,68,"playmovie7()",2));
  c.push(new Surfboards("js",24.4, `Forget me not round tail 5' 9" 18 1/4" 2 1/4"`,69,"playmovie7()",2));
  c.push(new Surfboards("js",24.7, `Forget me not round tail 5' 10" 18 1/4" 2 1/4"`,70,"playmovie7()",3));
  c.push(new Surfboards("js",25.7, `Forget me not round tail 5' 10" 18 1/2" 2 5/16"`,70,"playmovie7()",2));
  c.push(new Surfboards("js",25.3, `Forget me not round tail 5' 11" 18 1/2" 2 1/4"`,71,"playmovie7()",3));
  c.push(new Surfboards("js",26.4, `Forget me not round tail 5' 11" 18 5/8" 2 5/16"`,71,"playmovie7()",2));
  c.push(new Surfboards("js",27.6, `Forget me not round tail 6' 0" 18 3/4" 2 3/8"`,72,"playmovie7()",3));
  c.push(new Surfboards("js",28.6, `Forget me not round tail 6' 0" 18 7/8" 2 7/16"`,72,"playmovie7()",2));
  c.push(new Surfboards("js",29, `Forget me not round tail 6' 1" 18 7/8" 2 7/16"`,73,"playmovie7()",3));
  c.push(new Surfboards("js",30, `Forget me not round tail 6' 1" 19 " 2 1/2"`,73,"playmovie7()",2));
  c.push(new Surfboards("js",30.6, `Forget me not round tail 6' 2" 19 1/8" 2 1/2"`,74,"playmovie7()",3));
  c.push(new Surfboards("js",31.8, `Forget me not round tail 6' 2" 19 1/4" 2 9/16"`,74,"playmovie7()",2));
  c.push(new Surfboards("js",31, `Forget me not round tail 6' 3" 19 1/8" 2 1/2"`,75,"playmovie7()",3));
  c.push(new Surfboards("js",32.2, `Forget me not round tail 6' 3" 19 1/4" 2 9/16"`,75,"playmovie7()",2));
  c.push(new Surfboards("js",32.6, `Forget me not round tail 6' 4" 19 1/4" 2 9/16"`,76,"playmovie7()",3));
  c.push(new Surfboards("js",34, `Forget me not round tail 6' 4" 19 1/2" 2 5/8"`,76,"playmovie7()",2));
  c.push(new Surfboards("js",34.7, `Forget me not round tail 6' 5" 19 5/8" 2 5/8"`,77,"playmovie7()",2));
  c.push(new Surfboards("js",36.3, `Forget me not round tail 6' 6" 19 3/4" 2 11/16"`,78,"playmovie7()",2));
  c.push(new Surfboards("js",38.3, `Forget me not round tail 6' 8" 19 7/8" 2 3/4"`,80,"playmovie7()",2));
  c.push(new Surfboards("js",40.8, `Forget me not round tail 6' 10" 20 " 2 7/8"`,82,"playmovie7()",2));
  c.push(new Surfboards("js",43.6, `Forget me not round tail 7' 0" 20 1/8" 3"`,84,"playmovie7()",2));

  c.push(new Surfboards("js",22.7, `Air 17 X squash tail 5' 6" 18 1/4" 2 1/8" `,66,"playmovie8()",2));
  c.push(new Surfboards("js",24.2, `Air 17 X squash tail 5' 7" 18 1/2" 2 3/16"`,67,"playmovie8()",2));
  c.push(new Surfboards("js",25.4, `Air 17 X squash tail 5' 8" 18 5/8" 2 1/4"`,68,"playmovie8()",2));
  c.push(new Surfboards("js",26.4, `Air 17 X squash tail 5' 9" 18 3/4" 2 5/16"`,69,"playmovie8()",2));
  c.push(new Surfboards("js",27.9, `Air 17 X squash tail 5' 10" 19 " 2 3/8"`,70,"playmovie8()",2));
  c.push(new Surfboards("js",29.4, `Air 17 X squash tail 5' 11" 19 1/8" 2 7/16"`,71,"playmovie8()",2));
  c.push(new Surfboards("js",30.7, `Air 17 X squash tail 6' 0" 19 1/4" 2 1/2"`,72,"playmovie8()",2));
  c.push(new Surfboards("js",32.1, `Air 17 X squash tail 6' 1" 19 1/2" 2 9/16"`,73,"playmovie8()",2));
  c.push(new Surfboards("js",33.8, `Air 17 X squash tail 6' 2" 19 5/8" 2 5/8"`,74,"playmovie8()",2));
  c.push(new Surfboards("js",35.5, `Air 17 X squash tail 6' 3" 19 3/4" 2 11/16"`,75,"playmovie8()",2));
  c.push(new Surfboards("js",36.4, `Air 17 X squash tail 6' 4" 19 7/8" 2 3/4"`,76,"playmovie8()",2));

  c.push(new Surfboards("js",22.5, `Black box 3 squash tail 5' 4" 18 1/2" 2 1/8"`,64,"playmovie9()",1));
  c.push(new Surfboards("js",24.6, `Black box 3 squash tail 5' 6" 19 " 2 3/16"`,66,"playmovie9()",1));
  c.push(new Surfboards("js",26.1, `Black box 3 squash tail 5' 7" 19 1/4" 2 1/4"`,67,"playmovie9()",1));
  c.push(new Surfboards("js",26.8, `Black box 3 squash tail 5' 7" 19 1/4" 2 5/16"`,67,"playmovie9()",1));
  c.push(new Surfboards("js",27.6, `Black box 3 squash tail 5' 8" 19 1/2" 2 5/16"`,68,"playmovie9()",1));
  c.push(new Surfboards("js",28.4, `Black box 3 squash tail 5' 8" 19 1/2" 2 3/8"`,68,"playmovie9()",1));
  c.push(new Surfboards("js",29, `Black box 3 squash tail 5' 9" 19 5/8" 2 3/8"`,69,"playmovie9()",1));
  c.push(new Surfboards("js",29.9, `Black box 3 squash tail 5' 9" 19 5/8" 2 7/16"`,69,"playmovie9()",1));
  c.push(new Surfboards("js",30.5, `Black box 3 squash tail 5' 10" 19 3/4" 2 7/16"`,70,"playmovie9()",1));
  c.push(new Surfboards("js",31.3, `Black box 3 squash tail 5' 10" 19 3/4" 2 1/2"`,70,"playmovie9()",1));
  c.push(new Surfboards("js",32.1, `Black box 3 squash tail 5' 11" 20 " 2 1/2"`,71,"playmovie9()",1));
  c.push(new Surfboards("js",33, `Black box 3 squash tail 5' 11" 20 " 2 9/16"`,71,"playmovie9()",1));
  c.push(new Surfboards("js",33.8, `Black box 3 squash tail 6' 0" 20 1/4" 2 9/16"`,72,"playmovie9()",1));
  c.push(new Surfboards("js",34.6, `Black box 3 squash tail 6' 0" 20 1/4" 2 5/8"`,72,"playmovie9()",1));
  c.push(new Surfboards("js",35.5, `Black box 3 squash tail 6' 1" 20 1/2" 2 5/8"`,73,"playmovie9()",1));
  c.push(new Surfboards("js",36.5, `Black box 3 squash tail 6' 1" 20 1/2" 2 11/16"`,73,"playmovie9()",1));
  c.push(new Surfboards("js",37.3, `Black box 3 squash tail 6' 2" 20 3/4" 2 11/16"`,74,"playmovie9()",1));
  c.push(new Surfboards("js",38.3, `Black box 3 squash tail 6' 2" 20 3/4" 2 3/4"`,74,"playmovie9()",1));

  c.push(new Surfboards("js",25.2, `Phych nitro swallow tail 5' 2" 19 " 2 3/8"`,62,"playmovie10()",1));
  c.push(new Surfboards("js",26.7, `Phych nitro swallow tail 5' 3" 19 1/4" 2 7/16"`,63,"playmovie10()",1));
  c.push(new Surfboards("js",27.9, `Phych nitro swallow tail 5' 4" 19 5/8" 2 7/16"`,64,"playmovie10()",1));
  c.push(new Surfboards("js",29.3, `Phych nitro swallow tail 5' 5" 19 3/4" 2 1/2"`,65,"playmovie10()",1));
  c.push(new Surfboards("js",30.7, `Phych nitro swallow tail 5' 6" 19 7/8" 2 9/16"`,66,"playmovie10()",1));
  c.push(new Surfboards("js",31.3, `Phych nitro swallow tail 5' 7" 20 " 2 9/16"`,67,"playmovie10()",1));
  c.push(new Surfboards("js",33, `Phych nitro swallow tail 5' 8" 20 1/4" 2 5/8"`,68,"playmovie10()",1));
  c.push(new Surfboards("js",33.9, `Phych nitro swallow tail 5' 9" 20 1/2" 2 5/8"`,69,"playmovie10()",1));
  c.push(new Surfboards("js",35.6, `Phych nitro swallow tail 5' 10" 20 3/4" 2 11/16"`,70,"playmovie10()",1));
  c.push(new Surfboards("js",36.5, `Phych nitro swallow tail 5' 11" 21" 2 11/16"`,71,"playmovie10()",1));
  c.push(new Surfboards("js",38.4, `Phych nitro swallow tail 6' 0" 21 1/4" 2 3/4"`,72,"playmovie10()",1));

  c.push(new Surfboards("merrick",21.7, `Rook 15 squash tail 5'6	18 3/8	2 1/16`,66,"playmovie1()",2));
  c.push(new Surfboards("merrick",23.2, `Rook 15 squash tail 5'8	18 3/8	2 1/8`,68,"playmovie1()",2));
  c.push(new Surfboards("merrick",24.4, `Rook 15 squash tail 5'9	18 1/2	2 3/16`,69,"playmovie1()",2));
  c.push(new Surfboards("merrick",25.6, `Rook 15 squash tail 5'10	18 5/8	2 1/4`,70,"playmovie1()",2));
  c.push(new Surfboards("merrick",27.0, `Rook 15 squash tail 5'11	18 7/8	2 5/16`,71,"playmovie1()",2));
  c.push(new Surfboards("merrick",28.3, `Rook 15 squash tail 6'0	19	2 3/8`,72,"playmovie1()",2));
  c.push(new Surfboards("merrick",29.7, `Rook 15 squash tail 6'1	19 1/8	2 7/16`,73,"playmovie1()",2));
  c.push(new Surfboards("merrick",30.9, `Rook 15 squash tail 6'2	19 1/4	2 1/2`,74,"playmovie1()",2));
  c.push(new Surfboards("merrick",32.7, `Rook 15 squash tail 6'3	19 1/2	2 9/16`,75,"playmovie1()",2));
  c.push(new Surfboards("merrick",34.3, `Rook 15 squash tail 6'4	19 3/4	2 5/8`,76,"playmovie1()",2));
  c.push(new Surfboards("merrick",35.8, `Rook 15 squash tail 6'5	19 7/8	2 11/16`,77,"playmovie1()",2));
  c.push(new Surfboards("merrick",37.4, `Rook 15 squash tail 6'6	20	2 3/4`,78,"playmovie1()",2));
  c.push(new Surfboards("merrick",38.8, `Rook 15 squash tail 6'8	20 1/4	2 3/4`,80,"playmovie1()",2));
  c.push(new Surfboards("merrick",42.1, `Rook 15 squash tail 6'10	20 1/2	2 7/8`,82,"playmovie1()",2));

  c.push(new Surfboards("merrick",23.8, `Fever squash tail 5'8	18 1/4	2 3/16`,68,"playmovie2()",2));
  c.push(new Surfboards("merrick",25.0, `Fever squash tail 5'9	18 3/8	2 1/4`,69,"playmovie2()",2));
  c.push(new Surfboards("merrick",26.4, `Fever squash tail 5'10	18 5/8	2 5/16`,70,"playmovie2()",2));
  c.push(new Surfboards("merrick",27.9, `Fever squash tail 5'11	18 7/8	2 3/8`,71,"playmovie2()",2));
  c.push(new Surfboards("merrick",29.4, `Fever squash tail 6'0	19 1/8	2 7/16`,72,"playmovie2()",2));
  c.push(new Surfboards("merrick",30.8, `Fever squash tail 6'1	19 1/4	2 1/2`,73,"playmovie2()",2));
  c.push(new Surfboards("merrick",32.4, `Fever squash tail 6'2	19 1/2	2 9/16`,74,"playmovie2()",2));
  c.push(new Surfboards("merrick",34.1, `Fever squash tail 6'3	19 3/4	2 5/8`,75,"playmovie2()",2));
  c.push(new Surfboards("merrick",36.7, `Fever squash tail 6'4	20	2 3/4`,76,"playmovie2()",2));

  c.push(new Surfboards("merrick",24.2, `Neckbeard 2 square tail 5'4	18 5/8	2 3/16`,64,"playmovie3()",1));
  c.push(new Surfboards("merrick",25.6, `Neckbeard 2 square tail 5'5	18 7/8	2 1/4`,65,"playmovie3()",1));
  c.push(new Surfboards("merrick",26.8, `Neckbeard 2 square tail 5'6	19	2 5/16`,66,"playmovie3()",1));
  c.push(new Surfboards("merrick",28.1, `Neckbeard 2 square tail 5'7	19 1/8	2 3/8`,67,"playmovie3()",1));
  c.push(new Surfboards("merrick",29.7, `Neckbeard 2 square tail 5'8	19 3/8	2 7/16`,68,"playmovie3()",1));
  c.push(new Surfboards("merrick",31.3, `Neckbeard 2 square tail 5'9	19 5/8	2 1/2`,69,"playmovie3()",1));
  c.push(new Surfboards("merrick",32.9, `Neckbeard 2 square tail 5'10	19 7/8	2 9/16`,70,"playmovie3()",1));
  c.push(new Surfboards("merrick",34.4, `Neckbeard 2 square tail 5'11	20	2 5/8`,71,"playmovie3()",1));
  c.push(new Surfboards("merrick",35.9, `Neckbeard 2 square tail 6'0	20 1/8	2 11/16`,72,"playmovie3()",1));
  c.push(new Surfboards("merrick",38.2, `Neckbeard 2 square tail 6'2	20 3/8	2 3/4`,73,"playmovie3()",1));

  c.push(new Surfboards("merrick",24.4, `Rocket wide swallow tail 5'4	18 1/2	2 1/4`,64,"playmovie4()",1));
  c.push(new Surfboards("merrick",25.8, `Rocket wide swallow tail 5'5	18 3/4	2 5/16`,65,"playmovie4()",1));
  c.push(new Surfboards("merrick",27.2, `Rocket wide swallow tail 5'6	19	2 3/8`,66,"playmovie4()",1));
  c.push(new Surfboards("merrick",28.7, `Rocket wide swallow tail 5'7	19 1/4	2 7/16`,67,"playmovie4()",1));
  c.push(new Surfboards("merrick",30.3, `Rocket wide swallow tail 5'8	19 1/2	2 1/2`,68,"playmovie4()",1));
  c.push(new Surfboards("merrick",31.9, `Rocket wide swallow tail 5'9	19 3/4	2 9/16`,69,"playmovie4()",1));
  c.push(new Surfboards("merrick",33.5, `Rocket wide swallow tail 5'10	20	2 5/8`,70,"playmovie4()",1));
  c.push(new Surfboards("merrick",34.4, `Rocket wide swallow tail 5'11	20 1/4	2 5/8`,71,"playmovie4()",1));
  c.push(new Surfboards("merrick",37.0, `Rocket wide swallow tail 6'0	20 1/2	2 3/4`,72,"playmovie4()",1));
  c.push(new Surfboards("merrick",38.0, `Rocket wide swallow tail 6'1	20 3/4	2 3/4`,73,"playmovie4()",1));
  c.push(new Surfboards("merrick",40.7, `Rocket wide swallow tail 6'2	21	2 7/8`,74,"playmovie4()",1));

  c.push(new Surfboards("merrick",26.0, `Taco grinder pin tail 6'1	18 1/2	2 1/4`,73,"playmovie5()",3));
  c.push(new Surfboards("merrick",26.9, `Taco grinder pin tail 6'2	18 5/8	2 5/16`,74,"playmovie5()",3));
  c.push(new Surfboards("merrick",29.1, `Taco grinder pin tail 6'3	18 7/8	2 3/8`,75,"playmovie5()",3));
  c.push(new Surfboards("merrick",30.1, `Taco grinder pin tail 6'4	19	2 7/16`,76,"playmovie5()",3));
  c.push(new Surfboards("merrick",31.5, `Taco grinder pin tail 6'5	19 1/8	2 1/2`,77,"playmovie5()",3));
  c.push(new Surfboards("merrick",31.9, `Taco grinder pin tail 6'6	19 1/8	2 1/2`,78,"playmovie5()",3));
  c.push(new Surfboards("merrick",33.3, `Taco grinder pin tail 6'7	19 1/4	2 9/16`,79,"playmovie5()",3));
  c.push(new Surfboards("merrick",34.8, `Taco grinder pin tail 6'8	19 3/8	2 5/8`,80,"playmovie5()",3));
  c.push(new Surfboards("merrick",35.5, `Taco grinder pin tail 6'9	19 1/2	2 5/8`,81,"playmovie5()",3));
  c.push(new Surfboards("merrick",38.1, `Taco grinder pin tail 6'10	19 3/4	2 3/4`,82,"playmovie5()",3));
  c.push(new Surfboards("merrick",41.3, `Taco grinder pin tail 7'0	20	2 7/8`,83,"playmovie5()",3));
 // c.push(new Surfboards(, `Taco grinder pin tail `,,"playmovie4()"));
 

  
 
  
 


// c.push(new Surfboards(, ``,,"()"));
let cionoff = "off";
let jsonoff = "off";
let chilionoff = "off";
let lostonoff = "off";
function findboards(){
 d = c.sort(function(a,b){return a.height - b.height });
if(cionoff == "on"){
	 d = d.filter(board => { return board.company !== "merrick"}) ;
}
if(jsonoff == "on"){
	 d = d.filter(board => { return board.company !== "js"}) ;
}
if(chilionoff == "on"){
	 d = d.filter(board => { return board.company !== "chili"}) ;
}
if(lostonoff == "on"){
	 d = d.filter(board => { return board.company !== "lost"}) ;
}
findshortboard();
	findgroveler();
	findstepup();
}

function filterci() {
	if(cionoff == "off"){
		document.getElementById('buttonci').style.filter = "invert(0%)";
		cionoff = "on";
		findboards();
	}
	else if(cionoff == "on"){
		document.getElementById('buttonci').style.filter = "invert(100%)";
		cionoff = "off";
		findboards();
	}
}

function filterjs() {
	if(jsonoff == "off"){
		document.getElementById('buttonjs').style.filter = "invert(0%)";
		jsonoff = "on";
		findboards();
	}
	else if(jsonoff == "on"){
		document.getElementById('buttonjs').style.filter = "invert(100%)";
		jsonoff = "off";
		findboards();
	}
}

function filterchili() {
	if(chilionoff == "off"){
		document.getElementById('buttonchili').style.filter = "invert(0%)";
		chilionoff = "on";
		findboards();
	}
	else if(chilionoff == "on"){
		document.getElementById('buttonchili').style.filter = "invert(100%)";
		chilionoff = "off";
		findboards();
	}
}

function filterlost() {
	if(lostonoff == "off"){
		document.getElementById('buttonlost').style.filter = "invert(0%)";
		lostonoff = "on";
		findboards();
	}
	else if(lostonoff == "on"){
		document.getElementById('buttonlost').style.filter = "invert(100%)";
		lostonoff = "off";
		findboards();
	}
}

		function findshortboard() {
			let myBoards =[];
			let myVolume = Number(document.getElementById('vol').value);
			for(let i = 0; i < d.length; i++){
				if(d[i].volume + .6 >= myVolume && d[i].volume - .6  <= myVolume){
					if(d[i].wavesize == 2){
               myBoards.push(d[i].text);
               myBoards.push(d[i].volume);
				myBoards.push('L');	
               myBoards.push(`<div style="display:inline;color:blue" onclick="${d[i].playfunction}()">REVIEW</div>`);
              myBoards.push('<br>');
              	}
				}
			}
			document.getElementById('shortboarddis').innerHTML =  myBoards.join(' ');
		}
		function findgroveler() {
			let myBoards =[];
			let myVolume = Number(document.getElementById('vol').value);
			for(let i = 0; i < d.length; i++){
				if(d[i].volume - .6 >= myVolume && d[i].volume - 1.8  <= myVolume){
					if(d[i].wavesize == 1){
               myBoards.push(d[i].text);
               myBoards.push(d[i].volume);
				myBoards.push('L');	
               myBoards.push(`<div style="display:inline;color:blue" onclick="${d[i].playfunction}()">REVIEW</div>`);
              myBoards.push('<br>');
              	}
				}
			}
			document.getElementById('grovelerdis').innerHTML =  myBoards.join(' ');
		}
		function findstepup() {
			let myBoards =[];
			let myVolume = Number(document.getElementById('vol').value);
			for(let i = 0; i < d.length; i++){
				if(d[i].volume - .6 >= myVolume && d[i].volume - 2.2  <= myVolume){
					if(d[i].wavesize == 3){
               myBoards.push(d[i].text);
               myBoards.push(d[i].volume);
				myBoards.push('L');	
               myBoards.push(`<div style="display:inline;color:blue" onclick="${d[i].playfunction}()">REVIEW</div>`);
              myBoards.push('<br>');
              	}
				}
			}
			document.getElementById('stepupdis').innerHTML =  myBoards.join(' ');
		}
let groveleronoff = "off"
		function groveler(){
			if(groveleronoff == "off") {
			document.getElementById('grovelerdis').style.display = "block" ;
			groveleronoff = "on";
			findboards();

			}
			else if(groveleronoff == "on") {
document.getElementById('grovelerdis').style.display = "none" ;
			groveleronoff = "off";
			}
		}

		let shortboardonoff = "off"
		function shortboard(){
			if(shortboardonoff == "off") {
			document.getElementById('shortboarddis').style.display = "block" ;
			shortboardonoff = "on";
			findboards();

			}
			else if(shortboardonoff == "on") {
document.getElementById('shortboarddis').style.display = "none" ;
			shortboardonoff = "off";
			}
		}

		let stepuponoff = "off"
		function stepup(){
			if(stepuponoff == "off") {
			document.getElementById('stepupdis').style.display = "block" ;
			stepuponoff = "on";
			findboards();

			}
			else if(stepuponoff == "on") {
document.getElementById('stepupdis').style.display = "none" ;
			stepuponoff = "off";
			}
		}
		
		function opencbvolume(){
		document.getElementById('displaycbvolume').style.height =
		"auto";
}



	
			let findCustomVolume = function () {
let stockLength = (sLength1.value * 12) + Number(sLength2.value);
let stockVolume = sVolume.value;
let stockWidth = Number(sWidth1.value) + sWidth2.value / sWidth3.value;
let stockThick = Number(sThick1.value) + sThick2.value / sThick3.value;
let customLength = (cLength1.value * 12) + Number(cLength2.value);
let customWidth = Number(cWidth1.value) + cWidth2.value / cWidth3.value;
let customThick = Number(cThick1.value) + cThick2.value / cThick3.value;
let customVolume = (customLength / stockLength) * (customWidth / stockWidth) * (customThick / stockThick) * stockVolume;
document.getElementById('cVolumeDisplay').innerHTML = customVolume ;

}


	function playmovie1() {
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/qTpMJNMvHvI";
		closebutton();
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('boardtext').innerHTML =  
		"<h2>Rook 15</h2>First seen on the WCT tour in 2010, the Rookie has been rediscovered by our entire CT team this year; Seabass, Kelly, Adriano, Lakey, Bianca, Sage and Kai all have won heats on the new Rookie 15. Ridden shorter and wider than the original, the Rook 15 is the ultimate contest workhorse.  Single concave throughout, the Rook 15 works best when on rail. Ride this board your same height to 2 inches longer. ";}
		function playmovie2() {
			document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/zxjPfZvuEY8";
		closebutton();
		document.getElementById('boardtext').innerHTML =  
		"<h2>Fever</h2>The Fever has its roots in Al Merrick’s trusted and proven high performance short board designs. The goal in designing this board with Mike Andrews and Patrick Gudauskas was to create a more accessible tour level performance board that anyone who jumped onto it would “instantly feel the speed and zest for creativity.” Borrowing Pat’s favorite elements of the Proton, Rookie and MBM, and combining them with a subtle single concave and lower rocker resulted in a board with a huge sweet spot. With a slightly more parallel outline and forgiving rocker the Fever has proven to be an all-around design that excels in a wide range of conditions and wave types.";}
		function playmovie3() {
			document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/yFEz4jOP8gc";
		closebutton();
		document.getElementById('boardtext').innerHTML =  
		" <h2>Neck Beard 2</h2>When something isn’t broke, there’s no need to fix it. That said, Britt Merrick and Dane Reynolds still felt a few slight refinements would make an already epic board that much better. And it did: The merits to this update can be seen in Dane’s new surf film “The Electric Acid Surfboard Test.”<br>A big fan of single concave, Dane asked Britt to take out the vee from the original Neck Beard, creating single throughout. This changed the rocker landscape some, but in a very positive way—enhancing its wave entry, down-the-line speed, and overall control. They also widened the tail block 1/2” and added a slight hip, resulting in increased responsiveness and maneuverability.<br>Dane prefers the Neckbeard 2 as a tri-fin, but those that like quads may notice added down-the-line speed. It comes with a five-fin setup to get the best of both worlds.  Available in both PU/PE and EPS Spine-Tek.";}
		function playmovie4() {
			document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/4d2IGtqmePQ";
		closebutton();
		document.getElementById('boardtext').innerHTML = "<h2>Rocket Wide</h2>Introducing the Rocket Wide.  The incredibly user-friendly cousin of the Rocket 9<br>“My brothers and I loved the speed and control we were feeling with the Rocket 9 and we wanted to see how we could apply those same levels of fun and performance to a board for small and gutless waves.  The Rocket Wide features a wider tail block to skate across flat sections and a wider nose area to accommodate for better paddle power.  It’s a shorter, wider skate machine designed to lift the fun factor when the waves are not a their best.  So don’t let those small days get you down cause the Rocket Wide is ready for blast off!!” -Dane ";
	}
	function playmovie5() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/u6tO6AYg4h4";
		closebutton();
		document.getElementById('boardtext').innerHTML = "<h2>Taco Grinder</h2>Originating as a board for navigating long barrels in Mexico, the Taco Grinder is a direct result of CI team demanding shortboard performance in waves that require a semi-gun or step-up.  Bottom is single concave throughout, a fuller rail and tail kick make it good paddler that still goes vertical. In short, a versatile high performance step-up designed for advanced surfers who want to take their good wave performance to the next level.  Ride this board the same width and thickness as your all-around performance board, but 2” to 6” longer depending on how big the waves are. ";
	}
	function playmovie6() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/AdmjNP83R7o";
		closebutton();
		document.getElementById('boardtext').innerHTML = "<h2>MONSTA 8</h2>This is our best high performance all-rounder yet, improved and fine-tuned by the entire Traktor Team. 8 years after the original Monsta built its reputation as a go-to for surfers around the world, from WSL podiums to everyday sessions and annual Indo trips, the Monsta 8 is the result of nearly a decade’s worth of R&D.<br>With so many epic but contrasting styles throughout the Traktor Team, JS spent months gathering input from absolutely everyone. It had to cater for some of the best pure rail games in the world in Parko and Ace, the aerial freak shows of Mikey, Ryan & Dusty, and the crazy versatility of Julian and Owen. There’s a little bit of everyone in the Monsta 8, with it becoming the new gold standard under the entire team’s feet. From Owen starting his comeback at Snapper on one of our key M8 prototypes, to JS and Joel constantly testing & improving on the latest changes together, we couldn’t be happier with the results.<br>First, the rocker has been tweaked to have slightly more curve in both the nose and tail. The last two inches of nose rocker have been lifted to prevent catching in quality waves, while the adjustments to the tail curve provide extra release. Concaves have been deepened through the fins creating more speed and removing drag, while maintaining maximum control. The outline also has a more pronounced hip, allowing for quicker, more responsive direction changes. The Monsta 8 prompts intuitive, fast and flowing surfing, and has an outline to match.<br>We’ve refined the Monsta 8 to the point where everyone from longtime weekend warriors to world champs are calling it their favourite performance driven all-rounder ever. And now, it’s ready for everyone else to ride and enjoy in a huge range of waves around the globe. The best always find a way to get better."
	}

	function playmovie7() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/cAXUYTw0sWk";
		closebutton();
		document.getElementById('boardtext').innerHTML = "<h2>Forget me not 2</h2>The Forget Me Not II is the pinnacle of high performance equipment in decent to absolutely firing surf. We’ve developed this board from the original FMN to now be better than ever in pumping waves, but with more user-friendly design features overall. This allows you to get into waves earlier & easier, while maintaining the perfect level of control in quality conditions and high speeds.<br>Together, JS & Joel have worked closely on a number of small changes that result in an exponential improvement in board speed and control. First, the deck line and deck roll have been tweaked to add extra foam under the chest, while maintaining a finely tuned, responsive rail. This both increases paddle power in the lineup & while taking off, and provides a massive advantage in acceleration and speed control once surfing. JS first noticed these improvements adding 0.25L to his own boards, and with a shape that’s already so dialed-in, it’s these finishing touches that elevate a board to the best possible option we all want in pumping surf.<br>Because of this, we’ve seen the Traktor Team achieve a huge amount of success in the last few World Tour seasons on our constantly improving Forget Me Not. From Parko and Julian becoming Pipe Masters and Triple Crown champions, to Dusty winning at Haleiwa, Owen dominating at Cloudbreak (including two perfect 20 point heats along the way), and Jeremy, Ace and Julian all taking top honours at Teahupo’o.<br>So, while we know the FMN excels in perfect surf, we’ve also updated it to ensure you’ll have the best possible board for good shaped waves of any size. The new outline has no breaks or hips – just pure, clean curves with a slightly fuller nose. Combined with fractional adjustments to the rails improving all-round performance, the Forget Me Not 2 gives you the ability to cross over from larger, quality conditions, to any smaller waves with good shape. JS & Joel had some of their best surfs while testing the FMN2 in wedging, two foot beachbreaks, while Owen’s ridden his favourites everywhere from Brazil to Trestles on the WCT, proving that if the wave shape is right, this is the perfect equipment for you to be on.";
	}
	function playmovie8() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/5TUj202lA_o";
		closebutton();
		document.getElementById('boardtext').innerHTML = "We built the Air 17 for Julian to push the limits in fun, everyday waves from the Sunshine Coast to Sydney and California. It’s a board that over delivers, whether he’s dropping 10s at the Australian Open in sloppy beachies, or throwing some of the biggest combos of the year at perfect Trestles. Now, to cover an even wider range of waves, while maintaining the same magic core design features, we’ve created the Air 17X to allow the fastest, most progressive surfing possible no matter what the conditions are like.<br>Shorter, wider and flatter than its Performer Series genesis, the Air 17X is the perfect step-down to maintain a shortboard’s performance advantages, while exaggerating your small wave abilities. Even faster off the mark and through flat sections, it has the same large sweet spot thanks to more foam redistributed under front foot and a flatter rocker through the middle. Soft, forgiving rails, deeper concaves and similar late curve in the nose and tail allow you to go anywhere you like in weaker conditions, with as much speed as possible. Our most high performance X Series board, the Air 17X is ridden an inch shorter than the Air 17, and it’s ready to take your absolute best surfing to an even wider range of tiny to average, fun waves.";
	}
	function playmovie9() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/vrf1lB6nYFM";
		closebutton();
		document.getElementById('boardtext').innerHTML = "<h2>Black Box 3</h2>Much loved by surfers around the world for the last eight years, we’ve set out to build a new board that does justice to the famous Blak Box DNA, which has always brought fun yet still exciting surfing to good, average and even terrible waves.<br>The success of our Monsta Box and Air 17X at the refined end of the X Series prompted JS to re-design our Blak Box to be even more suited to weak waves and surfers who don’t get their ideal choice of conditions day in, day out. It’s user-friendly, and it’s a must have to make the most of whatever window you have to get in the water each week.<br>WAVE TYPE BLAK BOX 3 performs best in waves that are fat and crumbly but goes equally well when its clean and hollow. Best wave height is between 0 and 4 feet. BLAK BOX 3 is fast, manoeuvrable and super rippable! It's perfect in average conditions when most high performance boards are struggling.<br>FEATURES<br>Rocker An overall low to flat rocker is the perfect all-round rocker creating speed and glide in small to average conditions.<br>Fin setup Blak Box 3 comes stock as a five fin and will work equally well as a quad or thruster depending on the conditions. Alternative setups are available with custom orders.<br>Glassing specs Boards 5'4 - 5'10 glassed standard with 4 x 2 oz. deck x 4 oz. bottom. Boards 5'11 and up glassed standard with 4 x 4 oz deck x 4 oz. bottom (All sizes come standard with Hybrid Fibre tail strips).<br>Rail type Blak Box 3 has medium to low rails, reducing catch and increasing speed in and out of choppy or soft sections.<br>CONCAVE BB3 features a single concave through the nose running into a double concave starting forward of the fins. This design directs water under your feet to maintain lift, speed and manoeuvrability.";
	}
	function playmovie10() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/NL6entTGvTA";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>Phycho nitro</h2>The NITRO was one of my favourite Summer Series boards back in the day! With many customers continuing to order this as a custom model I thought it was time to be creative and make a completely new one.<br>I have given the PSYCHO NITRO a fuller nose with a slight vee and added more foam under the chest to give you even more paddle power. It has a smooth, flat, continuous rocker with a single concave under the front foot which runs into a double concave through the fins and finishes with a vee out of the swallow tail.<br>PSYCHO NITRO comes with a flyer which reduces the area through the back of the board and provides a pivot point to turn on a dime in the pocket on small waves. This provides a fast, reactive feel that will let you draw lines in average conditions that simply aren't possible on other boards! To complement this, the swallow tail gives PSYCHO NITRO a lively rail-to-rail feel and makes it incredibly easy to surf.<br>Summer conditions have well and truly set in here in Australia and this new model is a perfect way to keeping us all surfing between swells. It’s super quick, paddles amazingly, turns incredibly well and has everything you need for a fun surf in every day waves.<br>PSYCHO NITRO comes standard with a 5 fin set up so you can ride it as a thruster or a quad. Ride the PSYCHO NITRO 4 - 6 inches shorter than your normal short board.`;
	}
	function playchili1() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src ="https://www.youtube.com/embed/5rlM0gB-jUk";
		closebutton();
		document.getElementById('boardtext').innerHTML = "<h2>A2</h2>A board that has been slightly modified over the past year through our Project Black program. Tried, tested and loved by our team, we were excited to release it and knew you were going to love it too.<br>The original cad file was named 'ai8curve.cet' and has a creation date of 12/02/2003 - it sat in the archives of James Macbook. This model back then (named A2 Curve) was developed with the help of Andy Irons who rode and loved the board throughout 03 & 04. Since then, machines and software quickly became outdated. With new technology James has resurrected some old faithful files, this being one of them. We tweaked it with a modern day outline, concave and with a few minor adjustments by our team, the board came to life.It sits in our Premium Performance category for a reason, the A2 likes to be pushed hard, it drives through critical sections with precision and is as smooth on rail through turns as youd expect from a board ridden by AI. With a reasonably gentle rocker, single concave and tight squash with tail lift you can really give it some.<br>The A2, a shortboard you need in your quiver.";
	}

	function playchili2() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>FADER</h2>Welcome your new model to fit the much needed 5 fin round tail board in the quiver. Fresh with a thumb tail (not too wide for bigger stuff and not too pinny for the smaller stuff, a perfect balance), very fast outline with no break, all drive and speed for this one.<br>
With a new rocker changing the sweet spot allowing you to get up in the trickiest take offs and be smack bang on target for the whole wave. This board works really well in the pocket. We kept a single concave in the mid section, allowing it to hold through turns when your out on the face. Just behind the back fin it goes to a flat bottom for release and an easy transition from rail to rail.<br>
Complete with a 5 fin set up, makes it well rounded in all conditions. With the new FCS II system we have found the Performer template to well in the pocket and Carver template for down the line drive. In Futures we found the JJF template to work best in the pocket and the AM2 template for drive.<br>
Accompanying the Fader will be The Fader Step Up in a pin tail.
`;
	}
	function playchili3() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/KpUWNFUv0LI";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>OH ONE</h2>Chilli Surfboards latest creation is the Oh One. Combining 3 key elements from a few of our most favourite models we have the ultimate all round, all condition shortboard<br>
We've added the volume in the centre (stringer) of the board for a much similar feel to the Rare Bird for paddle power and foam under the front foot to keep you moving through the flat sections but kept the rail low so it doesn't feel like a big board.<br>
We have taken the bottom contours (very similar rocker and concaves) from the Spawn and Fader to create a high performance ride in critical steeper sections.<br>
Throw a thumb tail similar to the Fader (touch wider) accompanied with a 5 fin set up. When ridden thruster it's sharp and accurate and super fast and flow when ridden with a quad set up.<br>
Drop 1-2 inches from your Spawn (or rise 1 from your Peri Peri) or select your preferred litres. This board excels in 2-6 foot surf.`;
	}
	function playchili4() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/Gs5qRDUdtQc";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>RARE BIRD</h2>The Rare Bird, Chilli's best all round surfboard.<br>
If you liked the Toucan and Birdseye you are going to love the Rare Bird. This board has proven to be our best selling and most favoured Chilli Surfboard of ALL time! We basically built this board from Mitch Coleborns favourite Toucan in which he rode a 5'4 with a 5'6 width and thickness. With a single concave under the front foot back to a double concave and slight vee out through the back fin for easy transition rail to rail. The wide point is a little further forward allowing a smooth flow in smaller waves.. Combining that with a medium rail and pulled in thumb tail this board screams versatility and forgiveness. Quin fin setup has proven a huge plus with this model allowing it to perform in small stuff right up to head high barrels.<br>
We suggest you ride this 2-4 inches shorter than your standard shortboard. It sits nicely in between your Sugar and your A2.
`;
	}
	function playchili5() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/EMbpttcmy7w";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>NEVADA HIGH PERFORMANCE</h2>This set of dimensions are more High Performance dimensions. We suggest riding the dimensions of your favourite shortboard from the past (or up 1 inch from the Standard NEVADA) and this board should amplify your surf when the waves are 3 - 6 feet, hollow or just have a good pocket with a bit of power. Designed to perform. Also this board comes standard with Innegra fibre cloth on the bottom of each board to add strength and flex performance.
`;
	}
	function playlost1() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/m8I1FGL97pA";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>DRIVER</h2>The DRIVER has been a mainstay of ourcompetitive, high performance line since its initial release in 2011. The accomplishments on, and accolades for, The DRIVER are too many to list. It was first designed in 2010, in response to Kolohe Andino and Julian Wilson’s requests for a “stiffer tail, that pushes back with more drive”. Julian netted some of his early career wins on board a Driver, and to this day, the Driver continues to be Kolohe’s go-to board for surf between 3’-6’. Carissa Moore rode Drivers predominately to both her second and third World Titles, and Tyler Wright rode Drivers exclusively during her 2016 World Title campaign. The Driver has morphed and evolved continually over the years, but the basic concept remains the same. Designed around a low tail rocker, balanced with a more generous nose rocker, it’s meant to be ridden “off the tail”. It responds well to a strong, rear footed, technique. Because of its built in drive and the fact it easily projects under tail pressure, the Driver is an easy choice for average ability surfers who stand heavy and rely on the rear foot for drive. The outline is “modern modest”: Smooth, with no noticeable hip, or bump, and nothing extreme in terms of nose or tail width. Mid volume rails, nose to tail, with a slight box in the tail. Along with the low tail rocker, the Driver features a modest concave from center, increasing through the front fins and blending to flat off the tail. This concave adds lift, and also ensures plenty of rail rocker curve under the rear foot, which loosens up the relatively straight tail rocker, and allows tight radius turns when put on a rail. Overall, The Driver is a user friendly, tried and tested design, productive and proven around the world, by a wide variety of both top level and every day surfers. We are offering the DRIVER squash tail, in both Pro and Bro sizing for the initial Pro-formance Series release, with round, swallow, and round pin step up tails available via custom order.`;
	}
	function playlost2() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>PHYCHO KILLER</h2>The Psycho Killer is a psychotic spin o from the ever popular Quiver Killer. Featuring all the design aspects that made the Quiver Killer one of the most popular surfboards in the world for the last few years, it’s easy to catch waves and create speed. It loves tubes, and at faces, and is fully capable of performing full rail carves and nimble maneuvers when asked. This sort of wide ranging function is what makes the “Killer” Series a favorite for surfers from our top team to everyday Janes and Joes.<br>

• Revamped outline, featuring a refined nose curve and double bump Swallow Tail, for more “Pop” in small surf, while retaining hold in solid waves.<br>

• New “Hidden Volume”, two stage deck line. Packs in the foam for paddling, drive and stability, but keeps the rails sensitive and agile for precise rail based surfing.<br>

• Comes standard with deep double concave through the tail rocker, or can be really souped-up with R-4 Channels out the tail.`;
	}
	function playlost3() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/Ec4gw9F2-eA";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>SABOTAJ</h2>The “Sabo_TAJ”  is the result of ongoing design development between Taj Burrow and Matt Biolos.<br>

Meant to perform in the widest range of conditions by minimalistic means, and essentially provide Taj a one board weapon for his last minute, whirlwind travels …where theres no time, space or desire to pack a proper quiver. The Sabo_Taj is equally at home in 2′ shore break as 8′ Indo, and everything in between. We began with the …Lost Rock-Up chassis, and made refinements and tweaks (based off TBs input and feedback over several boards) until it became its own entity altogether.  From the Rock-Up, to Round Up, to the Mini Driver, and more than 10 years of developing shorter, wide nose, low entry “quiver killing” travel boards, we feel like this is the best one yet. The Sabo_TAJ features a modest, overall rocker that is “shifted back”, so that the entry is low, fast and drivey. The tail rocker has the curve and release of a high performance step up for tight radius whip and control. The rail line creates a shallow concave under and between feet to add lift and freedom, but zeros out in the nose and tail, to keep things catch free, forgiving, settled and precise. Theres a slight double concave cutting through the tail rocker which adds lift and speed in smaller waves, as well as drive in larger ones.<br>

The outline, with its noticeably wider than average nose (and a pulled in round tail) is semi elliptical and continuously curving, lending a feeling of catch free ease. Combined with the low entry rocker,this outline enables the board to be ridden quite short. The tail is pulled in “late”, but still features enough surface area in the fin area, under the rear foot, to be surfed fast and radical in every day waves, while the narrow tail tip holds in solid surf and tube riding, when asked.  Powerful Indo reef waves, punchy beach breaks, compact slabs, lined up points or even soft lumpy rollers, the Sabo_TAJ provides effective consistency, with the ability to be pushed to reckless and radical Taj Burrow levels, in nearly all conditions. Taj rides it 1″ shorter, but a touch wider, than his typical #Pro_formance short board, but depending on your preferred use, it can be ridden even a bit shorter (or much longer) for various, and equally effective degrees of diversity and fun.<br>

 `;
	}
	function playlost4() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/cYpgXSt8Bsk";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>BEACH BUGGY 2</h2>Derived from the Whiplash-TB. The Beach Buggy is more of an “every-mans” high performance shortboard. Used by many WT and Qualifying Series competitors, because it works equally well in small junk surf. This is the board that TB used to win the Hurley Pro, at Lower Trestles, in 2013, but has been refined and updated slightly over the last year. The 2015 version features TB’s hyper extended tail rocker (for tight radius arcs off the back foot) but a significantly more relaxed entry and central rocker, which combined with a wider nose allows for more drive and forward momentum, and stability, with a bigger landing platform from reverse and tweaked airs. A wider hip and tail block is added to the outline in the tail for more lift at low speeds, but the tail width at 12” is relatively the same as the WL- TB. This allows for superior precision and control than most al other “grovel” boards. With the centerline and rail volume is carried farther into the rails….and out to nose and tail the Beach Buggy is designed to be ridden 1-2” shorter than the WHIPLASH-TB. In the right size, this is a HP shortboard that can be ridden and enjoyed by most surfers of average to above average ability…not just for skinny kids and pros.`;
	}
	function playlost5() {
		document.getElementById('closebutton3').style.display = "block";
		document.getElementById('frame1').style.height = "57vw";
		document.getElementById('if1').src = "https://www.youtube.com/embed/EWgkNQuPvwg";
		closebutton();
		document.getElementById('boardtext').innerHTML = `<h2>POCKET ROCKET</h2>UPDATED FOR 2018: The 2018 PocketRocket now features refinements and improvements  based off of continued positive feedback from the PocketRockets used by Griffin Cola, Yago Dora and Joan Duru.  Updates include a slightly wider/more forgiving forward outline, a more relaxed central rocker, defined edge and square rail in the tail, refined concave and bottom curves, as well as  slight adjustments to the size scaling. The “ Bro” sizes really benefit from the updates ( making a more user friendly contemporary HP-Shortboard ) and also feature a lower, blended rail, without reducing overall volume.<br>

The Pocket Rocket was first developed for Kolohe Andino, for the varied beach breaks of Europe, in 2015. After years of mostly riding only Drivers and Sub Drivers, he requested a board with a new rocker that “fits more in the pocket, and lets me push hard, but still fast in the flats”. Quite a challenge. We made a few and I scribbled “PocketRocket” on them. Out of the gate he netted a QF finish (Azores) and a Win (Cascias) in back to back 10k WQS events. He then went on to solid runs in the France and Portugal WCT events. It’s built around a smooth, continuous rocker, to fit in the “pocket”, with enough concave cutting through it to “rocket” down the line and across flats.  With plenty of tail curve, the “Pocket Rocket” turns tight and whippy off the tail, but with a relaxed enough curve forward to still project and connect. The Pocket Rocket was quickly adopted under the feet of most of our team and various traveling Pros.  It also became popular with the Bros, when we introduced the “EDD” (Every Day Dims) for average surfers wanting to ride HP designs.  In 2016, Joan Duru rode a quiver of Pocket Rockets to qualification on the WCT.  Young phenom, Yago Dora, has been on a tear this year…winning the Newcastle Pro and famously taking down 3 World Champs en route to a semi final finish in The Oi Rio Pro, as a wildcard, on a board quiver of round tail Pocket Rockets.  Almost our entire team, from the legendary Taj Burrow to San Clemente’s exciting and explosive Griffin Colapinto, regularly ride Pocket Rockets since its inception just two years ago.  Most of Mason Ho’s magicaL Indonesian and Hawaiian antics have been performed on board a Pocket Rocket. Living Icon, Bruce Irons and future Icon, Jack Robinson are also Pocket Rocket riders. The Pocket Rocket has essentially become our status quo High performance…or should I say “Pro-formance” shortboard. Available stock in Kolohe style squash (easier in softer surf or for lead footed surfers) or Yago’s favorite round tail (great in more powerful surf, or for a more finesse based surfer).`;
	}
	






	