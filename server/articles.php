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
        'imagem' => 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff0h91x1eynwmergdeazx.png',
        'title' => 'Handling Video Streaming and Byte Range Requests in PHP',
        'conteudo' => "Video streaming is a common feature in many web applications, from social media platforms to e-learning websites. One important aspect of video streaming is the ability to seek or skip to different parts of the video, which relies on byte range requests. In this article, we'll explore how to handle byte range requests in PHP to enable video seeking functionality.
    What are Byte Range Requests?
    When a client requests a video file from a server, the server can either send the entire file or a specific range of bytes. Byte range requests allow the client to request only the part of the file that it needs, which can save bandwidth and improve performance. When a user seeks to a different part of the video, the client sends a byte range request to the server, asking for the bytes corresponding to the new position. ",
    ],
    [
        'imagem' => 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff0h91x1eynwmergdeazx.png',
        'title' => 'Handling Video Streaming and Byte Range Requests in PHP',
        'conteudo' => "Video streaming is a common feature in many web applications, from social media platforms to e-learning websites. One important aspect of video streaming is the ability to seek or skip to different parts of the video, which relies on byte range requests. In this article, we'll explore how to handle byte range requests in PHP to enable video seeking functionality.
    What are Byte Range Requests?
    When a client requests a video file from a server, the server can either send the entire file or a specific range of bytes. Byte range requests allow the client to request only the part of the file that it needs, which can save bandwidth and improve performance. When a user seeks to a different part of the video, the client sends a byte range request to the server, asking for the bytes corresponding to the new position. ",
    ]


];
die(json_encode($data));;
