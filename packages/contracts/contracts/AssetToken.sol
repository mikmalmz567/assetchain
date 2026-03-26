// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

/**
 * @title AssetToken
 * @dev ERC-1155 token untuk representasi fraksional aset UMKM (RWA)
 * Setiap token ID merepresentasikan satu aset nyata
 */
contract AssetToken is ERC1155, Ownable, ERC1155Pausable, ERC1155Supply {

    // ============ State Variables ============

    // Token ID => Asset metadata
    struct Asset {
        uint256 tokenId;
        string name;
        string metadataURI;    // IPFS URI for asset docs
        uint256 totalValue;    // Total nilai aset dalam IDR (dalam wei-equivalent)
        uint256 totalSupply;   // Total fraksional token
        uint256 pricePerToken; // Harga per token
        uint256 yieldRate;     // Yield rate dalam basis points (e.g. 1200 = 12%)
        uint256 tenor;         // Tenor dalam hari
        address originator;    // Alamat wallet UMKM
        bool isActive;
        uint256 createdAt;
    }

    mapping(uint256 => Asset) public assets;
    uint256 public nextTokenId = 1;

    // ============ Events ============
    event AssetCreated(uint256 indexed tokenId, address indexed originator, string name, uint256 totalValue);
    event AssetMinted(uint256 indexed tokenId, address indexed to, uint256 amount);
    event AssetDeactivated(uint256 indexed tokenId);

    // ============ Constructor ============
    constructor() ERC1155("") Ownable(msg.sender) {}

    // ============ Admin Functions ============

    /**
     * @dev Buat aset baru dan mint token ke vault
     * Hanya bisa dipanggil oleh owner (admin platform)
     */
    function createAsset(
        string memory name,
        string memory metadataURI,
        uint256 totalValue,
        uint256 totalSupplyAmount,
        uint256 pricePerToken,
        uint256 yieldRate,
        uint256 tenor,
        address originator
    ) external onlyOwner returns (uint256) {
        uint256 tokenId = nextTokenId++;

        assets[tokenId] = Asset({
            tokenId: tokenId,
            name: name,
            metadataURI: metadataURI,
            totalValue: totalValue,
            totalSupply: totalSupplyAmount,
            pricePerToken: pricePerToken,
            yieldRate: yieldRate,
            tenor: tenor,
            originator: originator,
            isActive: true,
            createdAt: block.timestamp
        });

        // Mint tokens ke contract owner (vault) untuk dijual ke investor
        _mint(msg.sender, tokenId, totalSupplyAmount, "");

        emit AssetCreated(tokenId, originator, name, totalValue);
        return tokenId;
    }

    /**
     * @dev Transfer token dari vault ke investor setelah pembelian
     */
    function mintToInvestor(
        address investor,
        uint256 tokenId,
        uint256 amount
    ) external onlyOwner {
        require(assets[tokenId].isActive, "Asset not active");
        safeTransferFrom(msg.sender, investor, tokenId, amount, "");
        emit AssetMinted(tokenId, investor, amount);
    }

    function deactivateAsset(uint256 tokenId) external onlyOwner {
        assets[tokenId].isActive = false;
        emit AssetDeactivated(tokenId);
    }

    function pause() external onlyOwner { _pause(); }
    function unpause() external onlyOwner { _unpause(); }

    // ============ View Functions ============

    function uri(uint256 tokenId) public view override returns (string memory) {
        return assets[tokenId].metadataURI;
    }

    function getAsset(uint256 tokenId) external view returns (Asset memory) {
        return assets[tokenId];
    }

    // ============ Overrides ============

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155, ERC1155Pausable, ERC1155Supply) {
        super._update(from, to, ids, values);
    }
}
