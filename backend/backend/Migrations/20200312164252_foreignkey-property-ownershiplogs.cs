using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class foreignkeypropertyownershiplogs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OwnershipLogs_Owners_OwnerId",
                table: "OwnershipLogs");

            migrationBuilder.DropForeignKey(
                name: "FK_OwnershipLogs_Properties_PropertyId",
                table: "OwnershipLogs");

            migrationBuilder.DropIndex(
                name: "IX_OwnershipLogs_PropertyId",
                table: "OwnershipLogs");

            migrationBuilder.AddColumn<int>(
                name: "OwnerId1",
                table: "OwnershipLogs",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_OwnershipLogs_OwnerId1",
                table: "OwnershipLogs",
                column: "OwnerId1");

            migrationBuilder.AddForeignKey(
                name: "FK_OwnershipLogs_Properties_OwnerId",
                table: "OwnershipLogs",
                column: "OwnerId",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OwnershipLogs_Owners_OwnerId1",
                table: "OwnershipLogs",
                column: "OwnerId1",
                principalTable: "Owners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OwnershipLogs_Properties_OwnerId",
                table: "OwnershipLogs");

            migrationBuilder.DropForeignKey(
                name: "FK_OwnershipLogs_Owners_OwnerId1",
                table: "OwnershipLogs");

            migrationBuilder.DropIndex(
                name: "IX_OwnershipLogs_OwnerId1",
                table: "OwnershipLogs");

            migrationBuilder.DropColumn(
                name: "OwnerId1",
                table: "OwnershipLogs");

            migrationBuilder.CreateIndex(
                name: "IX_OwnershipLogs_PropertyId",
                table: "OwnershipLogs",
                column: "PropertyId");

            migrationBuilder.AddForeignKey(
                name: "FK_OwnershipLogs_Owners_OwnerId",
                table: "OwnershipLogs",
                column: "OwnerId",
                principalTable: "Owners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OwnershipLogs_Properties_PropertyId",
                table: "OwnershipLogs",
                column: "PropertyId",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
