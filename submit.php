<?php 
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])) 
{
         
    $theme = "Новое сообщение с сайта";             
             
    $letter = "Данные сообщения:";
    $letter .="\n\n";
    $letter .="Имя: ".$_POST['name'];
    $letter .="\nEmail: ".$_POST['email'];
    $letter .="\nТелефон: ".$_POST['phone'];
    $letter .="\nСообщение: ".$_POST['message'];
    
    if (mail("martirosyan.mger8@gmail.com", $theme, $letter)){
      header("Location: thankyou.php");
    } else {
      header("Location:/ ");
    }  
              
} else {
  header("Location:/ ");
}