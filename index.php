<!DOCTYPE HTML>
<html>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="snickers.js"></script>
	<style>
		input.zipcode { display: block; padding: 5px; border: 1px solid #EEE; outline: none; border-radius: 4px }
		pre { outline: 1px solid #ccc; padding: 5px; margin: 5px; }
		.string { color: green; }
		.number { color: darkorange; }
		.boolean { color: blue; }
		.null { color: magenta; }
		.key { color: red; }
	</style>
</head>
<body>
<div class="test"><input type="text" placeholder="Enter IP Address" value="<?php echo $_SERVER['REMOTE_ADDR']; ?>" class="zipcode"></div>
<div class="results"></div>
</body>
</html>
