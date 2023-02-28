<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Ta-Te-Ti</title>
	<link rel="stylesheet" type="text/css" href="ta-te-ti.css">
</head>
<?php require 'ta-te-ti.php'; ?>
<body>
<a href="../gamesphp.php" class="back-link">Volver</a>
	<h1>Ta-Te-Ti</h1>
	<form method="POST">
		<table>
			<tr>
				<?php echo render_cell(1); ?>
				<?php echo render_cell(2); ?>
				<?php echo render_cell(3); ?>
			</tr>
			<tr>
				<?php echo render_cell(4); ?>
				<?php echo render_cell(5); ?>
				<?php echo render_cell(6); ?>
			</tr>
			<tr>
				<?php echo render_cell(7); ?>
				<?php echo render_cell(8); ?>
				<?php echo render_cell(9); ?>
			</tr>
		</table>
		<?php if (!in_array('', $_SESSION['board']) || $_SESSION['winner'] != ''): ?>
				<div class="result-box">
					<button type="submit" name="reset" class="reset-button">Jugar de nuevo</button>
				</div>
			<?php endif; ?>
	</form>
</body>
</html>

