# imageRenamer
> Make the process of naming photos within albums easy, set the year and image extension and this app will do the rest

## Use Locally
- Clone this repository at your desired location
- cd to ```/imagerenamer``` folder
- Add all the photos you wish to name in the ```/media``` folder
____
- Open opp ```app.js```
  - Under "Config Variables" you will set your config
  - ```imageFormat```: What extension does your image contain (i.e. is it a *.jpg*, .*png* etc)
    - e.g it's a .jpg: ```const imageFormat = "jpg"``` (line:5)
  - ```baseName```: What year are your images from? This will affect the file name (e.g. 2000_42.jpg)
    - e.g you want to set the year to 2000: ```const year = "2000"``` (line:6)
 > The example above would turn to an array of images = ```[photo0.jpg, photo1.jpg, photo2.jpg]``` to = ```[2000_0.jpg, 2000_1.jpg, 2000_2.jpg]```
 ___
 - You are ready: Install dependencies and run script: ``` npm i "&&" npm start ```
 - Images are now renamed, and stored in the same folder you placed them ```/media```


# Article
- [Contents of App](#contents)
- [Tech Usage and Reasoning](#tech-usage-and-reasoning)
- [Full Description](#full-description)
- [Contact Options](#get-in-touch-with-me)

# Contents
- Rename each image in a folder in ascending order 
- Have full control and enhance efficiency 

# Tech Usage and Reasoning
Functionality can be split into two: 
- Gets all images with the correct image extension
- Renames all images that had the matching extension to what is the desired naming pattern

"Glob" for gathering all images matching the search criteria (in this case, the correct image extension)
"node.js" for fs feature, using the module ```fs.rename``` that does the actual renaming

# Full Description
I took up on the task to save the family photos we had laying around in physical albums around the house. They are sorted in albums, but during the process of scanning them and importing I was seeking for a way to optimize the procedure.
What I did in my scenario, where I had multiple filled albums with photos, I scanned them and saved them in the ```/media``` folder as they processed. After they were all scanned they had the default naming structure of the printer, leading them to give less sense.

A folder of 100 photos would by default look like so with my printer: 
```
/media
  - dcp-l250-brother-scan.jpg
  - dcp-1250-brother-scan(1).jpg
  - dcp-1250-brother-scan(2).jpg
  - dcp-1250-brother-scan(3).jpg
  [...]
  - dcp-1250-brother-scan(99).jpg
```

For me to then do another iteration over the images felt tedious, and therefore I came up with this.

# Get in Touch With me:
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr | LinkedIn" width="40px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr.com" width="40px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
<a href="mailto:bragecontact@gmail.com"><img width="40px" className="homepage__contact" alt="gmail" src="https://i.imgur.com/mo4E0Fb.png"/></a>

### Creator 
MIT License
Copyright (c) 2021 Brage Røsberg

[linkedin]: https://www.linkedin.com/in/brage-rosberg/
[website]: https://www.bragerosberg.com
[androidrepo]: https://github.com/bragerosberg/budget-manager-reactnative
