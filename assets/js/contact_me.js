$(function() {
	$("#contactForm input, #contactForm textarea").jqBootstrapValidation();
	var url = new URL(window.location.href);
	if(url.searchParams.get("form") == "success") {
		var html = "<div class='alert alert-success'>";
		   html += "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>";
		   html += "<strong>Sua mensagem foi enviada.</strong>";
		   html += "</div>";
		$("#success").html(html);
	}
});

$("#name").focus(function() {
	$("#success").html();
});
