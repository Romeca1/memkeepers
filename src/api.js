
//let baseUrl ='http://ec2-3-136-22-121.us-east-2.compute.amazonaws.com:3000';
let baseUrl ='http://localhost:3000';

let apis = {  
    login: '/login',
    register: '/register',
    googlesignupcheck:'/googlesignupcheck',
    googlesignup:'/googlesignup',
    facebooksignupcheck:'/facebooksignupcheck',
    facebooksignup:'/facebooksignup',
    reset: '/reset',
    forgot: '/forgot',
    getprofiledata: '/getprofiledata',
    getprofilepicdata:'/getprofilepicdata',
    updatepasswordthroughemail: '/updatepasswordthroughemail',
    resendverificationlink: '/resendverificationlink',
    ProfilePicUpload: '/ProfilePicUpload',
    BackgroundPicUpload: '/BackgroundPicUpload',
    updateprofile: '/updateprofile',
    UpdatePassword: '/UpdatePassword',
    updateprofilerelation: '/updateprofilerelation',
    deleteprofilerelation:'/deleteprofilerelation',
    updateprofileeducation: '/updateprofileeducation',
    deleteprofileeducation: '/deleteprofileeducation',
    updateprofileworks: '/updateprofileworks',
    deleteprofileworks: '/deleteprofileworks',
    updateprofileinterests: '/updateprofileinterests',
    deleteprofileinterests: '/deleteprofileinterests',
    deleteprofilehobbies: '/deleteprofilehobbies',
    updateprofileactivity: '/updateprofileactivity',
    deleteprofileactivity: '/deleteprofileactivity',
    updateprofilemembership: '/updateprofilemembership',
    deleteprofilemembership: '/deleteprofilemembership',
    updateprofileaccountsetting: '/updateprofileaccountsetting',
    usercontactformdata:'/usercontactformdata',
    getuserprofileforfriends:'/users/getuserprofileforfriends',
    getalladdedfriendofuser:'/users/getalladdedfriendofuser',
    sentfriendrequest:'/users/sentfriendrequest',
    deletefriendrequest:'/users/deletefriendrequest',
    confirmaddfriend:'/users/confirmaddfriend',
    unfriendaddedfriend:'/users/unfriendaddedfriend',
    getprofileofallrequestedforfriend:'/users/getprofileofallrequestedforfriend',
    showprofiledetails:'/users/showprofiledetails',
    postssave:'/posts/postssave',
    postcommentssave:'/posts/postcommentssave',
    postcommentsreplysave:'/posts/postcommentsreplysave',
    postslikesave:'/posts/postslikesave',
    postsdislikesave:'/posts/postsdislikesave',
    getpostsdata:'/posts/getpostsdata',
    getpublicpost:'/posts/getpublicpost',
    getprivatepost:'/posts/getprivatepost',
    petspostssave:'/petsposts/petspostssave',
    petspostcommentssave:'/petsposts/petspostcommentssave',
    petspostcommentsreplysave:'/petsposts/petspostcommentsreplysave',
    petspostslikesave:'/petsposts/petspostslikesave',
    petspostsdislikesave:'/petsposts/petspostsdislikesave',
    getpetspostsdata:'/petsposts/getpetspostsdata',
    getpetspublicpost:'/petsposts/getpetspublicpost',
    getpetsprivatepost:'/petsposts/getpetsprivatepost',
    getnewsfeed:'/posts/getnewsfeed',
    getpetsnewsfeed:'/petsposts/getpetsnewsfeed',
    searchpeoplepagegroup:'/searchpeoplepagegroup',
    viewpeopleprofile:'/viewpeopleprofile',
    viewpeopletimeline:'/posts/viewpeopletimeline',
    viewpeoplepetstimeline:'/petsposts/viewpeoplepetstimeline',
    viewpeoplephoto:'/posts/viewpeoplephoto',
    viewpeoplepetsphoto:'/petsposts/viewpeoplepetsphoto',
    viewpeoplevideo:'/posts/viewpeoplevideo',
    viewpeoplepetsvideo:'/petsposts/viewpeoplepetsvideo',
    totalfollower:'/totalfollower',
    peopletotalfollower:'/peopletotalfollower',
    getpeoplefollowerprofile:'/getpeoplefollowerprofile',
    peopletotalfollowernormal:'/peopletotalfollowernormal',
    getfollowerprofile:'/getprofileoffollower',
    pageofloginuser:'/pageofloginuser',
    followpeople:'/followpeople',
    checkfollowing:'/checkfollowing',
    usercontactdashboarddata:'/usercontactdashboarddata',
    createfavpage:'/favpage/createfavpage',
    PageProfilePicUpload: '/favpage/PageProfilePicUpload',
    PageBackgroundPicUpload: '/favpage/PageBackgroundPicUpload',
    getfavpagepostsdata:'/favpageposts/getfavpagepostsdata',
    favpagepostssave:'/favpageposts/favpagepostssave',
    favpagepostupdate:'/favpageposts/favpagepostupdate',
    pagepostcommentssave:'/favpageposts/pagepostcommentssave',
    pagepostcommentdelete:'/favpageposts/pagepostcommentdelete',
    pagepostcommentedit:'/favpageposts/pagepostcommentedit',
    pagepostcommentsreplysave:'/favpageposts/pagepostcommentsreplysave',
    pagepostcommentsreplydelete:'/favpageposts/pagepostcommentsreplydelete',
    pagepostcommentreplyedit:'/favpageposts/pagepostcommentreplyedit',
    pagepostslikesave:'/favpageposts/pagepostslikesave',
    pagepostsdislikesave:'/favpageposts/pagepostsdislikesave',
    getpagedata:'/favpage/getpagedata',
    getpublicpagedata:'/favpage/getpublicpagedata',
    unlikefavpage:'/favpage/unlikefavpage',
    getlikedpageofuser:'/favpage/getlikedpageofuser',
    checkpageadmin: '/favpage/checkpageadmin',
    checkpagefollowing:'/favpage/checkpagefollowing',
    checkpageexist:'/favpage/checkpageexist',
    checkpageadminforedit:'/favpage/checkpageadminforedit',
    deletepagepost:'/favpageposts/deletepagepost',
    followpage:'/favpage/followpage',
    sentpageinvitationtofollow:'/favpage/sentpageinvitationtofollow',
    createbuttonforpage:'/favpage/createbuttonforpage',
    getpagefollowercount:'/favpage/getpagefollowercount',
    getprofileofpagefollower:'/favpage/getprofileofpagefollower',
    favpagesendmessage:'/favpagemessage/sendmessage',
    favpagegetmessage:'/favpagemessage/getmessage',
    getfavpagemessage:'/favpagemessage/getfavpagemessage',
    getallprofilemessageoffavpage:'/favpagemessage/getallprofilemessageoffavpage',
    favpageblockformessage:'/favpagemessage/blockformessage',
    favpageunblockformessage:'/favpagemessage/unblockformessage',
    favpagedeletechatmessage:'/favpagemessage/deletechatmessage',
    createprofileofdeceasedperson:'/deceasedperson/createprofileofdeceasedperson',
    getdataofdeceasedperson:'/deceasedperson/getdataofdeceasedperson',
    DeceasedPersonProfilePicUpload:'/deceasedperson/ProfilePicUpload',
    DeceasedPersonBackgroundPicUpload:'/deceasedperson/BackgroundPicUpload',
    checkdeceasedpersonadmin:'/deceasedperson/checkdeceasedpersonadmin',
    getdataofdeceasedpersonmember:'/deceasedperson/getdataofdeceasedpersonmember',
    getallnotifications:'/notification/getallnotifications',
    getallunviewednotifications:'/notification/getallunviewednotifications',
    deletenotifications:'/notification/deletenotifications',
    viewednotifications:'/notification/viewednotifications',
    sendmessage:'/message/sendmessage',
    getmessage:'/message/getmessage',
    getallunviewedmessages:'/message/getallunviewedmessages',
    getallprofileofmessage:'/message/getallprofileofmessage',
    seenformessage:'/message/seenformessage',
    blockformessage:'/message/blockformessage',
    unblockformessage:'/message/unblockformessage',
    deletechatmessage:'/message/deletechatmessage',
    createcircle:'/circle/createcircle',
    createcircleevent:'/circle/createcircleevent',
    updatecircle:'/circle/updatecircle',
    CircleProfilePicUpload: '/circle/CircleProfilePicUpload',
    CircleBackgroundPicUpload: '/circle/CircleBackgroundPicUpload',
    getcirclepostsdata:'/circleposts/getcirclepostsdata',
    getcircleunapprovepostsdata:'/circleposts/getcircleunapprovepostsdata',
    circlepostssave:'/circleposts/circlepostssave',
    circlepostupdate:'/circleposts/circlepostupdate',
    circlepostcommentssave:'/circleposts/circlepostcommentssave',
    circlepostcommentdelete:'/circleposts/circlepostcommentdelete',
    circlepostcommentedit:'/circleposts/circlepostcommentedit',
    circlepostcommentsreplysave:'/circleposts/circlepostcommentsreplysave',
    circlepostcommentsreplydelete:'/circleposts/circlepostcommentsreplydelete',
    circlepostcommentreplyedit:'/circleposts/circlepostcommentreplyedit',
    circlepostslikesave:'/circleposts/circlepostslikesave',
    circlepostsdislikesave:'/circleposts/circlepostsdislikesave',
    deletecirclepost:'/circleposts/deletecirclepost',
    approvecirclepost:'/circleposts/approvecirclepost',
    approvejoincirclerequest:'/circle/approvejoincirclerequest',
    getcircledata:'/circle/getcircledata',
    getcircleeventdata:'/circle/getcircleeventdata',
    getpubliccircledata:'/circle/getpubliccircledata',
    checkcircleadmin: '/circle/checkcircleadmin',
    checkcirclefollowing:'/circle/checkcirclefollowing',
    joincircle:'/circle/joincircle',
    checkcircleexist:'/circle/checkcircleexist',
    checkcircleadminforedit:'/circle/checkcircleadminforedit',
    gettheuserjoinedgroup:'/circle/gettheuserjoinedgroup',
    getprofileofcirclefollower:'/circle/getprofileofcirclefollower',
    sentcircleinvitationtojoin:'/circle/sentcircleinvitationtojoin',
    gettotalcirclerequest:'/circle/gettotalcirclerequest',
    gettotalcirclerequestforadmin:'/circle/gettotalcirclerequestforadmin',
    joingroupforrequest:'/circle/joingroupforrequest',
    approvecirclejoiningrequest:'/circle/approvecirclejoiningrequest',
    approvecircleevent:'/circle/approvecircleevent',
    getcircleeventdatatoapprove:'/circle/getcircleeventdatatoapprove',
    createcircleannouncement:'/circle/createcircleannouncement',
    getcircleannouncementdatatoapprove:'/circle/getcircleannouncementdatatoapprove',
    approvecircleannouncement:'/circle/approvecircleannouncement',
    getcircleannouncementdata:'/circle/getcircleannouncementdata',
    createbuttonforcircle:'/circle/createbuttonforcircle',
    getcircleprivatepost:'/circleposts/getcircleprivatepost',
    getcirclepublicpost:'/circleposts/getcirclepublicpost',
    leavegroup:'/circle/leavegroup',
    circleeventcommentssave:'/circle/circleeventcommentssave',
    circleeventcommentdelete:'/circle/circleeventcommentdelete',
    circleeventcommentedit:'/circle/circleeventcommentedit',
    circleeventcommentsreplysave:'/circle/circleeventcommentsreplysave',
    circleeventcommentsreplydelete:'/circle/circleeventcommentsreplydelete',
    circleeventcommentreplyedit:'/circle/circleeventcommentreplyedit',
    circleeventlikesave:'/circle/circleeventlikesave',
    circleeventdislikesave:'/circle/circleeventdislikesave',
  };

  export default {baseUrl,apis};
