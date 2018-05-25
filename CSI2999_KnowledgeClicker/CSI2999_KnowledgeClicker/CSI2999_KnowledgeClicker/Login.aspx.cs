using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CSI2999_KnowledgeClicker
{
    using CSI2999_KnowledgeClicker.Models;

    using BCrypt = BCrypt.Net.BCrypt;

    public partial class Login : System.Web.UI.Page
    {
        private knowledgeclickerdbEntities db = new knowledgeclickerdbEntities();

        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void btnLogin_OnServerClick(object sender, EventArgs e)
        {
            var u = new User();
            if (ModelState.IsValid)
            {
                using (db)
                {
                    u = this.db.Users.FirstOrDefault(p => p.Username == this.txtEmail.Value);
                    if (u != null)
                    {
                        if (DoesPasswordMatch(this.txtPassword.Value, u.Password))
                        {
                            Session["UserID"] = u.UserID;
                            Response.Redirect("Default.aspx");
                        }
                        else
                        {
                        }
                    }
                }
            }
        }

        private bool DoesPasswordMatch(string userEnteredPassword, string hashedPwdFromDatabase)
        {
            return BCrypt.Verify(userEnteredPassword, hashedPwdFromDatabase);
        }
    }
}