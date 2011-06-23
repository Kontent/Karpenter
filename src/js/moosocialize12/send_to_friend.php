<?php
sleep(1);
error_reporting(0);

function checkEmail($email) {
    
        if( (preg_match('/(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/', $email)) || (preg_match('/^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/',$email)) ) { 
            
            $host = explode('@', $email);
            
            if (!function_exists('checkdnsrr')) {
                function checkdnsrr($host, $type = '') {
                    if(!empty($host)) {
                        if($type == '') $type = "MX";
                        @exec("nslookup -type=$type $host", $output);
                        while(list($k, $line) = each($output)) {
                            if(eregi("^$host", $line)) {
                                return true;
                            }
                        }
                        return false;
                    }
                }
            }
              if(checkdnsrr($host[1].'.', 'MX') ) return true;
            if(checkdnsrr($host[1].'.', 'A') ) return true;
            if(checkdnsrr($host[1].'.', 'CNAME') ) return true;    
            
            
        }
        
        return false;        
        
    }  

$email = strip_tags($_GET['email']);
$title = strip_tags($_GET['title']);
$url   = strip_tags($_GET['url']);
$senderemail = "add_your_email here";

if(!checkEmail($email)){
	die("Sorry this is not a valid email address");
}

$extra 		= "From: mooSocialize <$senderemail>\n";
$extra 		.= "Content-Type: text/html; charset=utf-8;\n Content-Transfer-Encoding: 8bit\n";
$messaging 	= "<p>Hi, a friend of yours has sent you this page: <a href=\"$url\" title=\"$title\">$url</a></p>";
//$img = "<img src=\"http://www.artviper.net/screenshots/screener.php?url=$url&w=240\" alt=\"Screenshot of the website\" />"; only add this if you are registered with artViper screenshot service, or change to any other provider of your linking
//$messaging .= $img;
if(mail($email,"artViper mooSocialize widget - a friend has sent you: $title",$messaging,$extra)){
echo "<span style=\"color:#000\">Your mail has been sent!</span>";
}else{
echo "<span style=\"color:#000\">Uuups, there's been a problem sending your mail!</span>";
}
?>