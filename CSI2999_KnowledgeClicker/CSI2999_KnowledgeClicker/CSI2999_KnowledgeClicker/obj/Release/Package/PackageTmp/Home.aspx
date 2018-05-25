<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="CSI2999_KnowledgeClicker.Home" %>
 <asp:Content runat="server" ContentPlaceHolderID="HeadContent">
        <style>
            .homeH1 {
                text-align: center;
                background-color: rgba(51, 51, 51, 0.65);
                font-weight: bold;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                padding: 5px;
                border: 1px #333 solid;
            }

            .homeH2 {
                text-align: center;
                font-weight: bolder;
                font-size: 22px;
                background-color: rgba(51, 51, 51, 0.65);
                margin-left: 468px;
                margin-right: 468px;
                margin-bottom: 1px;
                color: #efe6e6;
                border: 2px black solid;
                padding: 10px;
            }

            .homeA {
                color: #efe6e6;
                font-size: 18px;
                font-weight: bold;
                padding: 5px;
            }
            .homeA:hover {background-color: #3e8e41}

            .homeA:active {
                background-color: #3e8e41;
                box-shadow: 0 5px #666;
                transform: translateY(4px);
            }

            .homeA:hover {
                background-color: transparent !important;
                text-decoration: none !important;
            }
            footer{
                margin-top: 70px !important;
            }

            .divPlay {
                width: 20%;
                text-align: center;
                border: 2px #333 solid;
                font-weight: bolder;
                font-size: 20px;
                margin-top: 1px;
                background-color: rgba(51, 51, 51, 0.65);
                display: block;
                overflow: auto;
                margin: auto;
                padding: 1px;
            }

            .divPlay:hover {
                background-color: transparent !important;
            }

            .divAcc {
                text-align: center;
                font-weight: bolder;
                font-size: 20px;
                background-color: rgba(51, 51, 51, 0.65);
                margin-left: 468px;
                margin-right: 468px;
                color: yellowgreen;
                border: 2px #325 solid;
            }

            .divAcc:hover {
                background-color: transparent !important;
                color: black !important;
            }

            .gifHome {
                border: 2px #333 solid;
            }

            #startImg {
                width: 90%;
                height: 220px;
                background-color: transparent !important;
            }

            #homeA {
                color: rgba(239, 230, 230, 0.85) !important;
            }
          
         #homeA:hover {
             background-color: transparent !important;
             color: black !important;
         }

         #AccP {
             color: rgba(239, 230, 230, 0.71) !important;
         }

 
            /*#startImg:hover {
                background-color: rgba(51, 51, 51, 0.85) !important;
            }*/
        </style>
    </asp:Content>

    <asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

        <asp:UpdatePanel runat="server">
            <ContentTemplate>

                <h1 class="homeH1">Welcome To Knowledge Clicker</h1>

                <h2 class="homeH2">PLAY</h2>

                <div class="divPlay">
                    <a href="Default.aspx" class="homeA">
                    <img id="startImg" src="Images/Brain-.png">
                </a>
                </div>

                <div class="divAcc">
                    <P id="AccP">HAVE AN ACCOUNT?</P>
                    <a href="Login.aspx" id="homeA">LOGIN</a>
                </div>

            </ContentTemplate>
        </asp:UpdatePanel>

    </asp:Content>