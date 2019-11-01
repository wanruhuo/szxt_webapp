<?php
    $to = "3418877961@qq.com";
    $subject = "test mail";
    $msg = "hello! what are you doing?";
    $from = "3418877951@qq.com";
    $headers = "from:$from";
    mail($to,$subject,$msg,$from,$headers);
    echo "mail send";
?>