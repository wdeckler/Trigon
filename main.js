const PI = Math.PI, PI2 = PI * 2;
const H = 500, W = 500;

const x_center = W / 2, y_center = H / 2;

var can = null;
var dc = null;

var degs = 0.0, rads = 0.0;

var sin = 0.0, cos = 0.0, tan = 0.0;
var sec = 0.0, csc = 0.0, cot = 0.0;

var A = 0.0, B = 0.0, C = 1.0;

var degs_edt = null, rads_edt = null;

var sin_edt = null, cos_edt = null, tan_edt = null;
var sec_edt = null, csc_edt = null, cot_edt = null;

var A_edt = null, B_edt = null, C_edt = null;

function init()
{
	can = document.getElementById("can");
	dc = can.getContext("2d");

	degs_edt = document.getElementById("degs_edt");
	degs_edt.onchange = function(e)
	{
		setAngle(e.target.id);
	}
	
	rads_edt = document.getElementById("rads_edt");
	rads_edt.onchange = function(e)
	{
		setAngle(e.target.id);
	}
	
	sin_edt = document.getElementById("sin_edt");
	sin_edt.onchange = function(e)
	{
		setInfo(e.target.id);
	}
	
	cos_edt = document.getElementById("cos_edt");
	cos_edt.onchange = function(e)
	{
		setInfo(e.target.id);
	}
	
	tan_edt = document.getElementById("tan_edt");
	tan_edt.onchange = function(e)
	{
		setInfo(e.target.id);
	}
	
	csc_edt = document.getElementById("csc_edt");
	csc_edt.onchange = function(e)
	{
		setInverse(e.target.id);
	}
	
	sec_edt = document.getElementById("sec_edt");
	sec_edt.onchange = function(e)
	{
		setInverse(e.target.id);
	}
	
	cot_edt = document.getElementById("cot_edt");
	cot_edt.onchange = function(e)
	{
		setInverse(e.target.id);
	}
}

function graphIt()
{
	const r = 240, ra = 20;
	
	var gi_x = x_center + (cos * r);
	var gi_y = y_center - (sin * r);
	
	var gi_xa = x_center + (cos * ra);
	var gi_ya = y_center - (sin * ra);
	
	dc.clearRect(0,0, W-1,H-1);
	
	dc.strokeStyle = "#333333";
	dc.lineWidth = 1;
	
	dc.beginPath();
	dc.moveTo(0, y_center);
	dc.lineTo(W, y_center);
	dc.moveTo(x_center, 0);
	dc.lineTo(x_center, H);
	dc.stroke();
	
	dc.strokeStyle = "blue";
	dc.lineWidth = 3;
	
	dc.beginPath();
	dc.moveTo(x_center, y_center);
	dc.lineTo(gi_x, gi_y);
	dc.stroke();

	dc.lineWidth = 1;
	
	dc.beginPath();
	dc.moveTo(x_center+r, y_center);
	dc.arc(x_center, y_center, ra, 0, -rads, true);
	dc.stroke();
}

function setAngle(sentby)
{
	switch(sentby)
	{
	case "degs_edt":
		degs = degs_edt.value;
		
		rads = degs * PI/180;
		rads_edt.value = rads.toPrecision(4);
	
		break;
	case "rads_edt":
		rads = rads_edt.value;
		
		degs = rads * 180/PI;
		degs_edt.value = degs.toPrecision(4);
	
		break;
	default:
	}
	sin = Math.sin(rads);
	sin_edt.value = sin.toPrecision(4);
	
	cos = Math.cos(rads);
	cos_edt.value = cos.toPrecision(4);
	
	tan = Math.tan(rads);
	tan_edt.value = tan.toPrecision(4);
	
	csc = 1 / sin;
	csc_edt.value = csc.toPrecision(4);
	
	sec = 1 / cos;
	sec_edt.value = sec.toPrecision(4);
	
	cot = 1 / tan;
	cot_edt.value = cot.toPrecision(4);
	
	graphIt();
}

function setInfo(sentby)
{
	switch(sentby)
	{
		case "sin_edt":
			sin = sin_edt.value;
			
			rads = Math.asin(sin);
			rads_edt.value = rads.toPrecision(4);
			
			degs = rads * 180 / PI;
			degs_edt.value = degs.toPrecision(4);

			cos = Math.cos(rads);
			cos_edt.value = cos.toPrecision(4);

			tan = Math.tan(rads);
			tan_edt.value = tan.toPrecision(4);
			
			break;
		case "cos_edt":
			cos = cos_edt.value;
			
			rads = Math.acos(cos);
			rads_edt.value = rads.toPrecision(4);
			
			degs = rads * 180 / PI;
			degs_edt.value = degs.toPrecision(4);

			sin = Math.sin(rads);
			sin_edt.value = sin.toPrecision(4);
		
			tan = Math.tan(rads);
			tan_edt.value = tan.toPrecision(4);
			
			break;
		case "tan_edt":
			tan = tan_edt.value;
			
			rads = Math.atan(tan);
			rads_edt.value = rads.toPrecision(4);

			degs = rads * 180 / PI;
			degs_edt.value = degs.toPrecision(4);

			cos = Math.cos(rads);
			cos_edt.value = cos.toPrecision(4);
			
			sin = Math.sin(rads);
			sin_edt.value = sin.toPrecision(4);
			
			break;
		default:
	}
			
	csc = 1 / sin;
	csc_edt.value = csc.toPrecision(4);
	
	sec = 1 / cos;
	sec_edt.value = sec.toPrecision(4);

	cot = 1 / tan;
	cot_edt.value = cot.toPrecision(4);
	
	graphIt();
}

function setInverse(sentby)
{
	switch (sentby)
	{
		case "csc_edt":
			csc = csc_edt.value;

			rads = Math.asin(1/csc);
			rads_edt.value = rads.toPrecision(4);

			degs = rads * 180 / PI;
			degs_edt.value = degs.toPrecision(4);

			sec = 1 / Math.cos(rads);
			sec_edt.value = sec.toPrecision(4);

			cot = 1 / Math.tan(rads);
			cot_edt.value = cot.toPrecision(4);

			break;
		case "sec_edt":
			sec = sec_edt.value;

			rads = Math.acos(1/sec);
			rads_edt.value = rads.toPrecision(4);

			degs = rads * 180 / PI;
			degs_edt.value = degs.toPrecision(4);

			csc = 1 / Math.sin(rads);
			csc_edt.value = csc.toPrecision(4);

			cot = 1 / Math.tan(rads);
			cot_edt.value = cot.toPrecision(4);

			break;
		case "cot_edt":
			cot = cot_edt.value;

			rads = Math.atan(1/tan);
			rads_edt.value = rads.toPrecision(4);

			degs = rads * 180 / PI;
			degs_edt.value = degs.toPrecision(4);

			sec = 1 / Math.cos(rads);
			cos_edt.value = cos.toPrecision(4);

			csc = 1 / Math.sin(rads);
			sin_edt.value = sin.toPrecision(4);

			break;
		default:
	}

	sin = 1 / csc;
	sin_edt.value = sin.toPrecision(4);

	cos = 1 / sec;
	cos_edt.value = cos.toPrecision(4);

	tan = 1 / cot;
	tan_edt.value = tan.toPrecision(4);

	graphIt();
}