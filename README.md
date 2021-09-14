# image renamer + clip trimmer
> Scripts to reduce repetitive process on editing or updating media files

Do you have a hundreds of images you want to rename by year/event? Or perhaps you want to trim your clips to only be the intro?
Skip repeating the same process over and over and instead use scripts that does the tedious job for you.
## Use Locally
- Clone this repository at your desired location
- cd to ```/image-renamer-clip-trimmer``` folder
 ___
 
 - You are ready: Install dependencies and run your desired script 
  ``` npm i ```
  Rename images: 
  ``` npm run rename ```
  Trim video clip: 
  ``` npm run trim ```
  
 - Let the script run, depending on the files you want to update the run time may wary. 


# Article
- [Contents of App](#contents)
- [Tech Usage and Reasoning](#tech-usage-and-reasoning)
- [Full Description](#full-description)
- [Contact Options](#get-in-touch-with-me)

# Contents
- Have full control and enhance efficiency by skipping repeating renaming images, trimming multiple videos into a custom length.

# Tech Usage and Reasoning
- **Glob** - fetch files matching query (images, clips) and then iterate on the result 
- **fs from node** - rename, unlinkSync

# Full Description
### Image Renaming
Select your image file extension type (e.g. jpg, png) and a base-name you want your renames to be, as an example this can be a year, or a location from where the photos was taken.

Running the script would then update a list of unnamed images and convert them like below (as example):
```
CEA_enNO808NO808&oq=uuidasd223.png --> Wedding_0.png
d&aqs=12312S/D..69i57j69i59l2j69.png --> Wedding_1.png
1378j0j1&sourceid=chrome&ie=23.png --> Wedding_2.png
```

### Video trimming
Select your video file extension (e.g. mp4) and the file path to where they are located, the start second and how long of a clip you want. 

If you have downloaded your favorite copyright free videos, but there is always an intro you want to cut out you can trim the videos to start from a desired beginning (e.g. 40 seconds into the clip), and how much of the remaining you want. If you do not update the `setDuration` you will get the next 2 minutes/ the rest. 

Running the script would then update a set of clips to be the following (as example):
```
copyRightFreeClip.mp4 (duration 8:25) --> copyRightFreeClip.mp4 (duration 2:00)
anotherCopyRightFreeClip.mp4 (duration 2:55) --> anotherCopyRightFreeClip.mp4 (duration 2:00)
lastCopyRightFreeClip.mp4 (duration 4:56) --> lastCopyRightFreeClip.mp4 (duration 2:00)
```

# Get in Touch With me
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr | LinkedIn" width="40px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr.com" width="40px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
<a href="mailto:bragecontact@gmail.com"><img width="40px" className="homepage__contact" alt="gmail" src="https://i.imgur.com/mo4E0Fb.png"/></a>

### Creator 
MIT License
Copyright (c) 2021 Brage Røsberg

[linkedin]: https://www.linkedin.com/in/brage-rosberg/
[website]: https://www.bragerosberg.com
[androidrepo]: https://github.com/bragerosberg/budget-manager-reactnative
