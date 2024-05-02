<?php

header('Access-Control-Allow-Origin: *');

$data = [

    [
        'imagem' => 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff0h91x1eynwmergdeazx.png',
        'title' => 'Handling Video Streaming and Byte Range Requests in PHP',
        'conteudo' => "Video streaming is a common feature in many web applications, from social media platforms to e-learning websites. One important aspect of video streaming is the ability to seek or skip to different parts of the video, which relies on byte range requests. In this article, we'll explore how to handle byte range requests in PHP to enable video seeking functionality.
    What are Byte Range Requests?
    When a client requests a video file from a server, the server can either send the entire file or a specific range of bytes. Byte range requests allow the client to request only the part of the file that it needs, which can save bandwidth and improve performance. When a user seeks to a different part of the video, the client sends a byte range request to the server, asking for the bytes corresponding to the new position. ",
    ],
    [
        'imagem' => 'https://wpengine.com/wp-content/uploads/2017/04/3d-header-1024x465.png',
        'title' => 'How to Create 3D Designs With the CSS3 Transform Property',
        'conteudo' => "There are two dimensions when it comes to the CSS3 transform property, 2D and 3D. When animating, transforms are used to make an element change from one state to another. This tutorial serves as an expansion from this guide about 2D animations. I’ll provide some insight into 3D design and how you can create awesome animations by combining these basic concepts.",
    ],
    [
        'imagem' => 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*OklDYDRyYj9aQiU5',
        'title' => 'You Become What You Focus On',
        'conteudo' => "The following quote is 2000 years old, but it seems to be relevant to today’s world:

        “Most of what passes for legitimate entertainment is inferior or foolish and only caters to or exploits people’s weaknesses.” ",
    ]


];
die(json_encode($data));;
