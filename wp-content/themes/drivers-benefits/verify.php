<?php /* Template Name: Verify */ ?>

<?php get_header(); ?>

<h1><?php the_title(); ?></h1>

<?php console_log(DB_BACKEND_URL);?>

<script>
	const DB_BACKEND_URL = '<?php echo DB_BACKEND_URL;?>';

	$(function() {
		$('#vmf-dob').datepicker({
	    format: 'yyyy-mm-dd',
	    autoclose: true,
	    maxViewMode: 2,
		});

		$('#vmf').submit((e) => {
			console.log('submit');
			e.preventDefault();

			const data = {
				employeeId: $('#vmf-employee-id').val(),
				dob: $('#vmf-dob').val(),
				nonTlc: !!$('#vmf-non-tlc:checked').val()
			}

			console.log(data);

			fetch(`${DB_BACKEND_URL}/api/member/verify`, {
				method: 'post',
				headers: {
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if (data.verified) {
						localStorage.setItem('driverVerified', true)
						window.location = '/member';
					}
					else {
						alert('Invalid credentials');
					}
				})
				.catch(err => {
					console.log(err);
				})
		})
	});

</script>
<style>
	form {
		max-width: 300px;
		margin-bottom: 50px;
	}
	.form-check {
		margin-bottom: 25px;
	}
</style>
<form id="vmf">
	<div class="form-group">
		<label for="vmf-employee-id">Employee ID: </label>
		<input id="vmf-employee-id" type="text" class="form-control" required />
	</div>
	<div class="form-check">
	  <input id="vmf-non-tlc" type="checkbox" class="form-check-input">
	  <label class="form-check-label" for="vmf-non-tlc">Non TLC</label>
	</div>
	<div class="form-group">
		<label for="vmf-dob">Date of Birth: </label>
		<input id="vmf-dob" type="text" class="form-control" placeholder="ex. 1980-01-01" required />
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>

<?php get_footer(); ?>
