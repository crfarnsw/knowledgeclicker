using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CSI2999_KnowledgeClicker
{
    using CSI2999_KnowledgeClicker.Models;

    public partial class SiteMaster : MasterPage
    {
        private knowledgeclickerdbEntities db = new knowledgeclickerdbEntities();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserID"] != null)
            {
                btnLogin.Visible = false;
                btnUserName.Visible = true;
                btnSignOut.Visible = true;
                btnUserName.InnerText = $"Signed in as {db.Users.Find(int.Parse(Session["UserID"].ToString())).Username}";
            }
        }

        protected void btnSignOut_OnServerClick(object sender, EventArgs e)
        {
            Session.Clear();
            //Response.Redirect("Login.aspx");
        }
    }
}