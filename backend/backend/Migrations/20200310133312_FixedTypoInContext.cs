using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class FixedTypoInContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProperyImages_Properties_PropertyId",
                table: "ProperyImages");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProperyImages",
                table: "ProperyImages");

            migrationBuilder.RenameTable(
                name: "ProperyImages",
                newName: "PropertyImages");

            migrationBuilder.RenameIndex(
                name: "IX_ProperyImages_PropertyId",
                table: "PropertyImages",
                newName: "IX_PropertyImages_PropertyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PropertyImages",
                table: "PropertyImages",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PropertyImages_Properties_PropertyId",
                table: "PropertyImages",
                column: "PropertyId",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PropertyImages_Properties_PropertyId",
                table: "PropertyImages");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PropertyImages",
                table: "PropertyImages");

            migrationBuilder.RenameTable(
                name: "PropertyImages",
                newName: "ProperyImages");

            migrationBuilder.RenameIndex(
                name: "IX_PropertyImages_PropertyId",
                table: "ProperyImages",
                newName: "IX_ProperyImages_PropertyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProperyImages",
                table: "ProperyImages",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProperyImages_Properties_PropertyId",
                table: "ProperyImages",
                column: "PropertyId",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
