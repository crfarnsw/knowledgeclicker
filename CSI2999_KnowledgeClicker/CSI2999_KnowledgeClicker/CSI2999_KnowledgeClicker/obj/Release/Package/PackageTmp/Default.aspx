<%@ Page Title="Knowledge Clicker" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CSI2999_KnowledgeClicker.Default" %>

<asp:Content runat="server" ContentPlaceHolderID="HeadContent">
   <style type="text/css">
        body {
            margin-top: 20px;
        }

        @font-face {
            font-family: 'HoboMedium';
            src: url('Content/hobostdmedium.ttf');
        }
        
        #myImage {
            opacity: 0.4;
            filter: alpha(opacity=40); /* msie */
        }
         .store {
             border: 1px solid ;
             text-align: right;
             overflow: auto;
         }

         .middlePanel{
             border:1px solid black;
             height:100px;
             overflow: hidden; 
         }
         .booksPanel {
             background-image: url(Images/BabyLevel1.png);
             text-align: center;
         }
         #numBooksPanel {
            margin:10px 10px 0 0;
            padding:5px 10px
         }
         .tutorPanel {
             background-image: url(/Images/KidLevel.png);
             text-align: center;
         }
         .professorPanel {
             background-image: url(Images/TeenLevel.png);
             text-align: center;
         }
         .schoolPanel {
             background-image: url(Images/AdultLevel.png);
             text-align: center;
         }
         .universityPanel {
             background-image: url(Images/UniLevel.png);
             text-align: center;
         }
         .labPanel {
             background-image: url(Images/LevelLab.png);
             text-align: center;
         }
         .container{
             max-width: 1600px !important;
         }

         button[title]:hover:after {
             font-family: 'Poppins', sans-serif;
             font-size: 20px;
             content: attr(title);
             padding: 4px 8px;
             color: #333;
             position:absolute;
             left: 0;
             top: 100%;
             white-space: nowrap;
             z-index: 20;
             -moz-border-radius: 5px;
             -webkit-border-radius: 5px;
             border-radius: 5px;
             -moz-box-shadow: 0px 0px 4px #222;
             -webkit-box-shadow: 0px 0px 4px #222;
             box-shadow: 0px 0px 4px #222;
             background-image: -moz-linear-gradient(top, #eeeeee, #cccccc);
             background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #eeeeee),color-stop(1, #cccccc));
             background-image: -webkit-linear-gradient(top, #eeeeee, #cccccc);
             background-image: -moz-linear-gradient(top, #eeeeee, #cccccc);
             background-image: -ms-linear-gradient(top, #eeeeee, #cccccc);
             background-image: -o-linear-gradient(top, #eeeeee, #cccccc);
        }

         #book {
            color: white;
            background-image: url(../Images/StoreLevel1.png);
            background-size: cover; /* <-- scale the image to cover the button */
            background-position: center center; /* <-- center the image in the button */
            line-height: 50px;
            height: 110px;
            width: 400px;
            border: none;
            text-align: right;
            font-size: 30px;
            color: #242969;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            font-family: 'HoboMedium';
            padding-right: 15px;
            padding-bottom: 25px;
        }

       #tutor {
           color: white;
           background-image: url(../Images/StoreLevel2.png);
           background-size: cover; /* <-- scale the image to cover the button */
           background-position: center center; /* <-- center the image in the button */
           line-height: 50px;
           height: 110px;
           width: 400px;
           border: none;
           text-align: right;
           font-size: 30px;
           color: black;
           color: #242969;
           text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
           font-family: 'HoboMedium';
           padding-right: 15px;
           padding-bottom: 35px;
       }

       #prof {
           color: white;
           background-image: url(../Images/StoreLevel3.png);
           background-size: cover; /* <-- scale the image to cover the button */
           background-position: center center; /* <-- center the image in the button */
           line-height: 50px;
           height: 110px;
           width: 400px;
           border: none;
           text-align: right;
           font-size: 30px;
           color: #242969;
           text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
           font-family: 'HoboMedium';
           padding-right: 15px;
           padding-bottom: 45px;
       }

       #school {
           color: white;
           background-image: url(../Images/StoreLevel4.png);
           background-size: cover; /* <-- scale the image to cover the button */
           background-position: center center; /* <-- center the image in the button */
           line-height: 50px;
           height: 110px;
           width: 400px;
           border: none;
           text-align: right;
           font-size: 30px;
           color: black;
           color: #242969;
           text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
           font-family: 'HoboMedium';
           padding-right: 15px;
           padding-bottom: 40px;
       }

           #uni {
           color: white;
           background-image: url(../Images/StoreLevel5.png);
           background-size: cover; /* <-- scale the image to cover the button */
           background-position: center center; /* <-- center the image in the button */
           line-height: 50px;
           height: 110px;
           width: 400px;
           border: none;
           text-align: right;
           font-size: 30px;
           color: black;
           color: #242969;
           text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
           font-family: 'HoboMedium';
           padding-right: 15px;
           padding-bottom: 40px;
       }

           #lab {
           color: white;
           background-image: url(../Images/StoreLevel6.png);
           background-size: cover; /* <-- scale the image to cover the button */
           background-position: center center; /* <-- center the image in the button */
           line-height: 50px;
           height: 110px;
           width: 400px;
           border: none;
           text-align: right;
           font-size: 30px;
           color: black;
           color: #242969;
           text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
           font-family: 'HoboMedium';
           padding-right: 15px;
           padding-bottom: 40px;
       }
    </style>
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <asp:HiddenField runat="server" ID="lblID" ClientIDMode="Static"/>
            <%--Brain Column --%>
                    <div class="col-md-4" style="text-align: center; overflow: hidden;">
                        <h2 style="text-align: center;">Knowledge: <span runat="server" ClientIDMode="Static" id="knowledgeCount">0</span></h2>
                        <p style="text-align: center;">Total Knowledge: <span runat="server" ClientIDMode="Static" id="totKnowledgeCount">0</span></p>
                        <button type="button" style="background-color: transparent; border: none;" id="btnBrain">
                            <%--<span id="name" >1</span>--%>
                            <img  id="imgBrain" style="background-color: transparent" src="Images/BabyBrain.png" />
                            <img  id="imgBrain2" class="hidden" style="background-color: transparent" src="Images/KidBrain.png" />
                            <img  id="imgBrain3" class="hidden" style="background-color: transparent" src="Images/TeenBrain.png" />
                            <img  id="imgBrain4" class="hidden" style="background-color: transparent" src="Images/AdultBrain.png" />
                            <img  id="imgBrain5" class="hidden" style="background-color: transparent" src="Images/GalaxyBrain.png" />
                        </button>
                        <div>
                            <button type="button" id="btnSave" title="Save Progress" class="btn btn-lg btn-danger" >
                                <span class="glyphicon glyphicon-save"></span>
                            </button>
                            <button type="button" id="btnLoad" title="Load Progress" class="btn btn-lg btn-danger">
                                <span class="glyphicon glyphicon-open"></span>
                            </button>
                        </div>
                        <h3 style="text-align: center" id="currLevel"></h3>
                        <h3 style="text-align: center" id="nextLevel"></h3>
                        <h3 style="text-align:center" id="knowledgePerSecond"></h3>
                    </div>

                <%--Middle Column--%>
                    <div class="col-md-4" style=" padding-bottom: 5px; ">
                        <div>
                            <h2 style="text-align: center;"><strong>The Quest for Knowledge</strong></h2>
                        </div>
                        <div class="middlePanel booksPanel">
                            <span id="numBooksPanel">
                                Books read: <span id="book-count">0</span>
                            </span>
                        </div>
                        <div id="tutorsPanel" class="middlePanel tutorPanel hidden">
                            <span id="numTutorsPanel" class="booksPanel" ></span>
                            Num. of Tutors: <span id="tutor-count">0</span>
                        </div>
                        <div id="profPanel" class="middlePanel professorPanel hidden">
                            <span id="numProfessorsPanel"  class="booksPanel text-center"></span>
                            Num. of Professors: <span id="prof-count">0</span>
                        </div>
                        <div id="schoolPanel" class="middlePanel schoolPanel hidden">
                            <span id="numSchoolPanel" class="booksPanel"></span>
                            <h4>Num. of Schools: <span id="school-count">0</span></h4>
                        </div>
                        <div id="universityPanel" class="middlePanel universityPanel hidden">
                            <span id="numUniPanel" class="booksPanel"></span>
                            <h4>Num. of Universities: <span id="uni-count">0</span></h4>
                        </div>
                        <div id="labPanel" class="middlePanel labPanel hidden">
                            <span id="numLabPanel" class="booksPanel"></span>
                            <h4>Num. of Labs: <span id="lab-count">0</span></h4>
                        </div>
                    </div>

                <%--Store Column--%>
                    <div id="Store" class="col-md-4" style="max-height: 100%;">
                       <h1>Store:</h1>
                        <div class="btn-group-vertical btn-group-lg">
                            <%-- School Stuff - math tree --%>
                            <div id="storeContainer">
                                <button type="button" id="book" title=".1 knowledge / s"></button>
                                <button type="button" id="tutor" title="1 knowledge / s"></button>
                                <button type="button" id="prof" title="2 knowledge / s"></button>
                                <button type="button" id="school" title="3 knowledge / s"></button>
                                <button type="button" id="uni" title="15 knowledge / s"></button>
                                <button type="button" id="lab" title="40 knowledge / s">Buy Research Lab</button>
                             </div>
                            <br />
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Upgrades:</h1>
                        <div class="btn-group-vertical btn-group-lg">
                            <button type="button" id="btnBookUpgrd" class="btn btn-primary hidden">Upgrade Book</button>
                            <button type="button" id="btnClickUpgrade1" class="btn btn-primary hidden">Upgrade Knowledge per Click</button>
                            <button type="button" id="btnClickUpgrade2" class="btn btn-primary hidden">Upgrade Knowledge per Click</button>
                            <button type="button" id="btnSchoolUpgrd" class="btn btn-primary hidden">Upgrade School</button>
                            <button type="button" id="btnSchoolUpgrd2" class="btn btn-primary hidden">Upgrade School</button>
                        </div>
                    </div>

    <script src="Scripts/jquery-ui-1.12.1.min.js"></script>
    <script src="Scripts/jquery.cookie-1.4.1.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <link rel="stylesheet" href="Content/bootstrap.css"/>
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    <script src="Models/PlayerProgress.js"></script>
</asp:Content>
