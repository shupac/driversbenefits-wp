$(document).ready(() => {
	// console.log(DB_BACKEND_URL)
	const form = $('.verify__form form').attr('method', null).attr('action', null)

	$('.verify__dob input').datepicker({
		format: 'yyyy-mm-dd',
		autoclose: true,
		maxViewMode: 2,
	})

	form.submit((e) => {
		// console.log('submit');
		e.preventDefault()

		const data = {
			employeeId: $('.verify__employee_id input').val(),
			dob: $('.verify__dob input').val(),
			nonTlc: !!$('.verify__non_tlc input:checked').val(),
		}

		// console.log(data);
		if (!data.employeeId || !data.dob) return

		fetch(`${DB_BACKEND_URL}/api/member/verify`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				if (data.verified) {
					localStorage.setItem('driverVerified', true)
					window.location = '/member'
				} else {
					alert('Invalid credentials')
				}
			})
			.catch((err) => {
				console.log(err)
			})
	})
})

// 493092
// 1974-06-11
