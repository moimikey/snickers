<!DOCTYPE HTML>
<html>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="snickers.js"></script>
	<style>
		input.zipcode { display: block; padding: 5px; border: 1px solid #EEE; outline: none; border-radius: 4px; float: left }
		pre { outline: 1px solid #ccc; padding: 5px; margin: 5px; }
		.string { color: green; }
		.number { color: darkorange; }
		.boolean { color: blue; }
		.null { color: magenta; }
		.key { color: red; }
		.clear { float: left; position: relative; top: 7px; margin-left: 5px; font-family: helvetica, sans-serif; font-size: 12px; display: block }
		.clear a { text-decoration: none; color: #000 }
		.results { display: block }
	</style>
</head>
<body>
<div class="test"><input type="text" placeholder="Enter IP Address" value="<?php echo $_SERVER['REMOTE_ADDR']; ?>" class="zipcode"></div>
<div class="clear"><a href="javascript:;">clear</a></div>
<div style="clear:both"></div>
<div class="results"></div>
</body>
</html>
