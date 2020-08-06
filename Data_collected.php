
	<?php

         $name = $_POST['fullname'] ;
         $data = $_POST['forus'] ;


	      $query01 = "INSERT INTO data_about VALUES ('$name','$data') ;" ;
          $dns="mysql:host=localhost;dbname=test";
          $username="root" ;
          $password="";

          try{
          $db = new PDO($dns, $username, $password) ;
          $statement01 = $db->prepare($query01);
          $statement01->execute();
          
         echo"<h3>Thanks for your response...<strong>$name</strong><br/> Your response is recorded successfully...</h3>" ;
         
      }catch(Exception $e){
      $error_msg = $e->getMessage() ;
      echo "<h3>Error is: $error_msg</h3>" ;
      }

	?>


