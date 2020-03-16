using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class captionpropertyimages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Caption",
                table: "PropertyImages",
                type: "nvarchar(250)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Caption",
                table: "PropertyImages");
        }
    }
}
