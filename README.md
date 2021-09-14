# image renamer + clip trimmer
> Personal scripts I've created to automate repetitive tasks when editing, handling or updating media files like images and movies

**TL;DR**: Skip renamining countless amount of files manually, cutting out the intro of video clips. Use scripts that automates them tedious jobs for you.

Are you digitalizing your physical albums containing hundreds, or even thousands of photos? Have you downloaded your favorite movie series, but have an intro you always skip?
This was my case, and I decided to automate whatever I could to spice up the repetitive process (e.g. naming > thousand copies of scanned physical photos 🤯)
It was a lot more exciting to take on the challenge to make this a possibility, and oh boy, it felt good when it worked the way I hoped it could, saving me a lot of time. Where I know gladly will name copies of photos to whatever prefix someone wants. 

## Use Locally
- Clone this repository at your desired location
- cd to ```/image-renamer-clip-trimmer``` folder
## Add your media
Whether you want to rename images, or trim video clips: take the media assets you want to rename/compress and place it into the `/media` folder
 ___
 
 - You are ready: Install dependencies and run your desired script 
  ``` npm i ```
  Rename images: 
  ``` npm run rename ```
  Trim video clip: 
  ``` npm run trim ```
  
 - Let the script run, depending on the files you want to update the run time may wary. The updated media assets will be in the same folder `/media`

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
Enter the file `renameImage.ts` and navigate to the declared variables. 
These are the variables, and their intended usage:
- `fileYear`: What year are the files form (e.g. 2021)
- `prefix`: What context is the file (e.g. June, Wedding, Christmas)

Running the script would then update a list of unnamed images and convert them like below (as example):
```
CEA_enNO808NO808&oq=uuidasd223.png --> Wedding_2021_0.png
d&aqs=12312S/D..69i57j69i59l2j69.png --> Wedding_2021_1.png
1378j0j1&sourceid=chrome&ie=23.png --> Wedding_2021_2.png
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
