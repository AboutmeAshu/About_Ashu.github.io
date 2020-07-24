<?php
         $file_name= fopen("Data.txt","a");

         $name = $_POST['fullname'] ;
         $data = $_POST['forus'] ;

         $data_to_write = "Name : ". $name . "  Message: " . $data ;
         fwrite($file_name,"\n $data_to_write") ;
         fclose($file_name);
         echo "<h1><i> Thanks for your response... $name </i></h1>".PHP_EOL;
         echo "<h1><i>Have a nice day..</i></h1>".PHP_EOL;
         echo "<h1><i> STAY HOME</i></h1>".PHP_EOL;
         echo "<h1><i> STAY SAFE...</i></h1>".PHP_EOL;

?>
