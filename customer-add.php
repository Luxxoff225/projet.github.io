<?php

include('header.php');

?>

<h1>Ajouter client</h1>
<hr>

<div id="response" class="alert alert-success" style="display:none;">
	<a href="#" class="close" data-dismiss="alert">&times;</a>
	<div class="message"></div>
</div>

<form method="post" id="create_customer">
	<input type="hidden" name="action" value="create_customer">
	<div class="row">
		<div class="col-xs-6">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4>Information client</h4>
					<div class="clear"></div>
				</div>
				<div class="panel-body form-group form-group-sm">
					<div class="row">
						<div class="col-xs-6">
							<div class="form-group">
								<input type="text" class="form-control margin-bottom copy-input required" name="customer_name" id="customer_name" placeholder="Nom" tabindex="1">
							</div>
							<div class="form-group">
								<input type="text" class="form-control margin-bottom copy-input required" name="customer_address_1" id="customer_address_1" placeholder="Adresse 1" tabindex="3">	
							</div>
							<div class="form-group">
								<input type="text" class="form-control margin-bottom copy-input required" name="customer_town" id="customer_town" placeholder="Ville" tabindex="5">		
							</div>
							<div class="form-group no-margin-bottom">
								<input type="text" class="form-control copy-input " name="customer_postcode" id="customer_postcode" placeholder="Code Postal" tabindex="7">					
							</div>
						</div>
						<div class="col-xs-6">
							<div class="input-group float-right margin-bottom">
								<span class="input-group-addon"><i class="fa fa-envelope"></i></span>
								<input type="email" class="form-control copy-input required" name="customer_email" id="customer_email" placeholder="adresse Email" aria-describedby="sizing-addon1" tabindex="2">
							</div>
						    <div class="form-group">
						    	<input type="text" class="form-control margin-bottom copy-input" name="customer_address_2" id="customer_address_2" placeholder="Adresse 2" tabindex="4">
						    </div>
						    <div class="form-group">
						    	<input type="text" class="form-control margin-bottom copy-input required" name="customer_county" id="customer_county" placeholder="Pays" tabindex="6">
						    </div>
						    <div class="form-group no-margin-bottom">
						    	<input type="text" class="form-control required" name="customer_phone" id="invoice_phone" placeholder="Contact" tabindex="8">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-6 text-right">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4>Inormation Expedition</h4>
				</div>
				<div class="panel-body form-group form-group-sm">
					<div class="row">
						<div class="col-xs-6">
							<div class="form-group">
								<input type="text" class="form-control margin-bottom required" name="customer_name_ship" id="customer_name_ship" placeholder="Nom" tabindex="9">
							</div>
							<div class="form-group">
								<input type="text" class="form-control margin-bottom" name="customer_address_2_ship" id="customer_address_2_ship" placeholder="Adresse 2" tabindex="11">	
							</div>
							<div class="form-group no-margin-bottom">
								<input type="text" class="form-control required" name="customer_county_ship" id="customer_county_ship" placeholder="Pays" tabindex="13">
							</div>
						</div>
						<div class="col-xs-6">
							<div class="form-group">
						    	<input type="text" class="form-control margin-bottom required" name="customer_address_1_ship" id="customer_address_1_ship" placeholder="Adresse 1" tabindex="10">
							</div>
							<div class="form-group">
								<input type="text" class="form-control margin-bottom required" name="customer_town_ship" id="customer_town_ship" placeholder="Ville" tabindex="12">							
						    </div>
						    <div class="form-group no-margin-bottom">
						    	<input type="text" class="form-control " name="customer_postcode_ship" id="customer_postcode_ship" placeholder="Code postal" tabindex="14">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 margin-top btn-group">
			<input type="submit" id="action_create_customer" class="btn btn-success float-right" value="Creer" data-loading-text="Creating...">
		</div>
	</div>
</form>

<?php
	include('footer.php');
?>